import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // trailingSlash: 'always',
  site: 'https://kita-grossweil.netlify.app/',
  integrations: [
    tailwind(),
    sitemap()
  ]
});
