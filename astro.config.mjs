// @ts-check

import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import { generatePresentationItems } from "./scripts/generatePresentationItems.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://uyupun.github.io",
  base: "/takada-semi",
  integrations: [
    starlight({
      title: "高田ゼミ",
      description:
        "──生き残るのは、最も強い者でも、最も賢い者でもなく、変化に最もよく適応した者である。",
      defaultLocale: "ja",
      locales: {
        root: {
          label: "日本語",
          lang: "ja",
        },
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/uyupun/takada-semi",
        },
      ],
      sidebar: [
        {
          label: "コンセプト",
          link: "/concept",
        },
        {
          label: "発表資料",
          collapsed: false,
          items: generatePresentationItems(),
        },
      ],
      // https://starlight.astro.build/ja/guides/css-and-tailwind/
      customCss: ["./src/styles/custom.css"],
      head: [
        {
          tag: "link",
          attrs: {
            rel: "icon",
            href: "/takada-semi/logo_takada_semi.jpeg",
            type: "image/jpeg",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:type",
            content: "article",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:site_name",
            content: "高田ゼミ",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:description",
            content:
              "──生き残るのは、最も強い者でも、最も賢い者でもなく、変化に最もよく適応した者である。",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content:
              "https://uyupun.github.io/takada-semi/logo_takada_semi.jpeg",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image:alt",
            content: "ぅゅ...ぷんぽぷんぽのロゴ",
          },
        },
      ],
    }),
  ],
});
