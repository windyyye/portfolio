// @ts-check
import { defineConfig } from 'astro/config';
import rehypeMargin from './src/plugins/rehype-margin.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://omaopoao.com',
  markdown: {
    rehypePlugins: [rehypeMargin],
  },
});
