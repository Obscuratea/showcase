import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    order: z.number().default(100),
    // Main screenshot, shown on the card and at the top of the project page.
    image: z.string().optional(),
    imageAlt: z.string().default(''),
    // Additional screenshots, shown in a grid below the text.
    gallery: z.array(z.object({ src: z.string(), alt: z.string(), caption: z.string().optional() })).default([]),
    repo: z.string().url().optional(),
    link: z.string().url().optional(),
    linkLabel: z.string().default('Visit'),
  }),
});

export const collections = { projects };
