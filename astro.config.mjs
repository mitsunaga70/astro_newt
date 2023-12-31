import { defineConfig } from 'astro/config';
import postcssMergeQueries from "postcss-merge-queries";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap({
    lastmod: new Date()
  }), preact()],
  vite: {
    css: {
      postcss: {
        plugins: [postcssMergeQueries]
      },
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/assets/styles/variables.scss";`
        }
      }
    }
  },
  server: {
    host: "192.168.30.215",
    port: 8080,
    open: true
  },
  site: 'https://newt.fieldweb.co.jp/',
  image: {
    domains: ["blog-739442.assets.newt.so"]
  }
});