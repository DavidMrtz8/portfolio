// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://davidmrtz.me',
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()],

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  })
});