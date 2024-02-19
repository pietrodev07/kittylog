import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: { publicDir: "../public" },
  srcDir: "src",

  title: "Kittylog",
  description: "Pretty logs in JavaScript!",
  head: [["link", { rel: "icon", href: "/logo.ico" }]],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Try it online!", link: "https://codesandbox.io/p/devbox/kittylog-hgqh4h" },
    ],

    search: {
      provider: "local",
    },

    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "What is Kittylog?", link: "/guide/what-is-kittylog" },
          { text: "Getting Started", link: "/guide/getting-started" },
        ],
      },
      {
        text: "Log Types",
        items: [
          { text: "Info", link: "/guide/log-types/info" },
          { text: "Success", link: "/guide/log-types/success" },
          { text: "Warning", link: "/guide/log-types/warning" },
          { text: "Error", link: "/guide/log-types/error" },
          { text: "Debug", link: "/guide/log-types/debug" },
          { text: "Performance", link: "/guide/log-types/performance" },
          { text: "Blank", link: "/guide/log-types/blank" },
          { text: "Table", link: "/guide/log-types/table" },
          { text: "Table from JSON", link: "/guide/log-types/table-json" },
          { text: "Table from CSV", link: "/guide/log-types/table-csv" },
          { text: "HTTP Response", link: "/guide/log-types/http-response" },
          { text: "Custom", link: "/guide/log-types/custom" },
        ],
      },
      {
        text: "Input",
        items: [{ text: "User Input", link: "/guide/user-input/" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/pietrodev07/kittylog" },
      { icon: "discord", link: "https://discord.gg/tkVxmEmdCn" },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present pietrodev07",
    },
  },
});
