// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
//
// Deployment notes:
// - User/Organization site (repo "<user>.github.io"): served from root.
// - Project page (repo "myhp" etc.): uncomment `base` to "/<repo-name>/".
export default defineConfig({
  site: 'https://usk-Kimura.github.io',
  // base: '/myhp/',
  trailingSlash: 'ignore',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      serialize(item) {
        item.lastmod = new Date().toISOString();
        // Prioritise main landing pages; publication detail pages lower.
        const u = item.url;
        if (/\/(en\/)?p\//.test(u)) item.priority = 0.5;
        else if (/\/(en\/)?cv\/$/.test(u)) item.priority = 0.8;
        else if (/^https?:\/\/[^/]+\/(en\/)?$/.test(u)) item.priority = 1.0;
        else item.priority = 0.6;
        return item;
      },
    }),
  ],
  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
