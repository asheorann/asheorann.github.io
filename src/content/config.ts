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
    startDate: z.date(),
    endDate: z.date().optional(),
    summary: z.string(),
    hoverDetail: z.string().optional(),
    tags: z.array(z.enum(['research', 'product', 'community', 'technical'])),
    featured: z.boolean().optional(),
    link: z.string().optional(),
    repo: z.string().optional(),
    coverImage: z.string().optional(),
  }),
});

export const collections = {
  thoughts,
  projects,
};
