import { z, defineCollection } from "astro:content"
import { categories } from "./categories"
import { zodEnumFromObj } from "@/lib/zod"

export const postSchema = z
  .object({
    title: z.string(),
    draft: z.boolean(),
    date: z.date(),
    lastmod: z.date().optional(),
    categories: z.array(zodEnumFromObj(categories)),
    tags: z.array(z.string()).optional(),
    icon: z.string(),
    links: z
      .array(
        z.object({
          title: z.string().optional(),
          description: z.string().optional(),
          website: z.string().url(),
          image: z.string().url().optional(),
        }),
      )
      .optional(),
  })
  .strict()
export type PostSchema = z.infer<typeof postSchema>

export const membersSchema = z.object({
  name: z.string(),
  description: z.string(),
  image: z.string().url(),
  social: z.array(
    z.object({
      label: z.string().optional(),
      icon: z.string().optional(),
      link: z.string().url(),
    }),
  ),
  joined_year: z.number().min(1976).max(new Date().getFullYear()),
})
export type MembersSchema = z.infer<typeof membersSchema>

const postColection = defineCollection({
  type: "content",
  schema: postSchema,
})

const pagesCollection = defineCollection({
  type: "content",
  schema: postSchema,
})

const membersCollection = defineCollection({
  type: "data",
  schema: membersSchema,
})

export const collections = {
  post: postColection,
  pages: pagesCollection,
  members: membersCollection,
}
