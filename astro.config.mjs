import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://kali.gg/",
  integrations: [tailwind()],
  vite: {
    ssr: {
      external: ["@11ty/eleventy-img", "svgo"],
    },
  },
});
