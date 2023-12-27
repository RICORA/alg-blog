import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"
import mdx from "@astrojs/mdx"
import { remarkCallout } from "./src/lib/remark-plugins/remarkCallout"
import { rehypeCustomCode, type RehypeCustomCodeOptions } from "rehype-custom-code"
import { remarkMetaString } from "remark-meta-string"

// https://astro.build/config
export default defineConfig({
  site: "https://alg.tus-ricora.com/",
  integrations: [tailwind(), solidJs(), mdx()],
  markdown: {
    remarkPlugins: [remarkCallout, remarkMetaString],
    rehypePlugins: [
      [
        rehypeCustomCode,
        {
          propsPrefix: "",
          shouldExportCodeAsProps: true,
          shiki: {
            themes: {
              light: "github-light",
              dark: "one-dark-pro",
            },
          },
        } satisfies RehypeCustomCodeOptions,
      ],
    ],
    syntaxHighlight: false,
  },
})
