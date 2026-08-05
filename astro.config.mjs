import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://secondlineai.com',
  output: 'static',
  compressHTML: true,
  build: {
    format: 'directory',
  },
});
