import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://secondlineai.com',
  output: 'static',
  compressHTML: true,
  build: {
    format: 'directory',
  },
  integrations: [sitemap()],
});
