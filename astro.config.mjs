// @ts-check
import { defineConfig } from "astro/config";

// 静态站(Cloudflare Pages 直接托管 dist/)。aglet.dev 官网,0.1.0 始发。
export default defineConfig({
  site: "https://aglet.dev",
  output: "static",
  trailingSlash: "ignore",
  // 真正的多语言:en 默认(/ 无前缀),zh→/zh/、ja→/ja/。各 locale 独立页面,
  // 单语言渲染;内容单源在 src/i18n.ts。
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh", "ja"],
    routing: { prefixDefaultLocale: false },
  },
});
