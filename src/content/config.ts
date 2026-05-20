import { defineCollection, z } from 'astro:content';

const thoughts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    status: z.enum(['thinking out loud', 'draft argument', 'standing position', 'notes']),
    draft: z.boolean().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
    bullets: z.array(z.string()).optional(),
    takeaway: z.string().optional(),
    tags: z.array(z.enum(['research', 'product', 'community', 'technical'])),
    featured: z.boolean().optional(),
    hasFullPage: z.boolean().optional(),
    links: z.array(z.object({
      label: z.string(),
      url: z.string(),
    })).optional(),
    note: z.string().optional(),
  }),
});

export const collections = {
  thoughts,
  projects,
};
