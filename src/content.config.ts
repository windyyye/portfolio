import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Build log: short dated Markdown posts in src/content/log/.
const log = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/log' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
  }),
});

export const collections = { log };
