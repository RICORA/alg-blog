# alg.tus-ricora.com (WIP)

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=734781265&skip_quickstart=true&geo=SoutheastAsia)

> [!WARNING]
> このリポジトリは現在開発中です。

<!-- TODO: Wikiのリンクを張る -->

このリポジトリは[RICORA Programming Team](https://alg.tus-ricora.com/)のブログを管理するためのものです。ブログの編集やローカルでの閲覧方法についてはWikiを参照してください。

## 🤖 Tech Stack

- [Astro](https://astro.build/)
- [SolidJS](https://solidjs.com/)
- [MDX](https://mdxjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Ark UI](https://ark-ui.com/)

## 💻 Development

### 🧰 Prerequirements

- [Bun](https://bun.sh/)
  - JavaScriptランタイム
  - 必要バージョン：[`.tool-versions`](./.tool-versions)を参照

<!-- prettier-ignore -->
> [!TIP]
> [mise](https://github.com/jdx/mise)や[asdf](https://asdf-vm.com/)といったバージョン管理ツールを利用すると、[`.tool-versions`](./.tool-versions)に記載されたバージョンのBunを簡単にインストールすることができます。

### 🚀 Getting Started

1. このリポジトリをクローンする

   ```sh
   git clone https://github.com/ricora/alg.tus-ricora.com.git
   ```

2. 依存関係をインストールする

   ```sh
   bun install
   ```

3. ビルドする

   ```sh
   bun run --bun build
   ```

   ビルドした成果物は`./dist/`に保存されます。

   このコマンドは、TypeScriptの型チェックとサイトのビルドを行います。これらを個別に行いたい場合は、`bun run --bun astro check`と`bun run --bun astro build`をそれぞれ実行してください。

4. 開発サーバーを立ち上げる

   ```sh
   bun run --bun dev
   ```

   開発サーバーはデフォルトで`localhost:4321`で立ち上がります。

   > [!WARNING]
   > 開発サーバーを立ち上げる前に、ビルドを一度行ってください。  
   > ビルド時に検索用インデックスを生成するため、一度ビルドをしないと検索エンジンとして利用している[pagefind](https://pagefind.app/)が正しく動作しません。

5. テストを実行する

   ```sh
   bun run test
   ```

   テストには[bun test](https://bun.sh/docs/cli/test)を利用しているため、単に`bun test`としても実行できます。

6. ビルドした成果物をプレビューする

   ```sh
   bun run --bun preview
   ```

### 🧞 Commands

全てのコマンドは、ターミナル上でプロジェクトのルートディレクトリから実行してください:

| Command                         | Action                                                |
| :------------------------------ | :---------------------------------------------------- |
| `bun install`                   | 依存関係をインストールする                            |
| `bun run --bun dev`             | 開発サーバーを`localhost:4321`で立ち上げる            |
| `bun run --bun build`           | `./dist/`へプロジェクトをビルドする                   |
| `bun run test`                  | テストを実行する                                      |
| `bun run --bun preview`         | ビルドした成果物をローカルサーバーでプレビューする    |
| `bun run --bun astro ...`       | `astro add`, `astro check`といったAstro CLIを実行する |
| `bun run --bun astro -- --help` | Astro CLIの使い方を見る                               |

### 📁 Directory Structure

| Directory                 | Description                                      |
| :------------------------ | :----------------------------------------------- |
| `src/components/Elements` | プロジェクト全体で使われるコンポーネント         |
| `src/components/SideBar`  | サイドバーのコンポーネント                       |
| `src/content/posts`       | ブログ記事のMDXファイル                          |
| `src/content/members`     | RICORA Programming Teamのメンバー情報            |
| `src/content/pages`       | `/about-us`や`/contact`などのページのMDXファイル |
| `src/layouts`             | ページのレイアウト                               |
| `src/pages`               | ページのエントリポイント                         |
| `src/styles`              | サイト全体で使われるスタイル                     |

[Project Structure | Astro Docs](https://docs.astro.build/en/basics/project-structure/)や[Bulletproof React](https://github.com/alan2207/bulletproof-react)を参考にしています。
