import { defineConfig } from 'astro/config';
import postcssMergeQueries from "postcss-merge-queries";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap({
    lastmod: new Date()
  }), react(), preact()],
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
    host: "192.168.30.28",
    port: 8080,
    open: true
  },
  site: 'https://harmonious-praline-57738f.netlify.app',
  image: {
    domains: ["blog-739442.assets.newt.so"]
  }
});