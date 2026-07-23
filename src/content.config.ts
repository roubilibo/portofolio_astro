import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod/v4";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.string(),
    summary: z.string(),
    role: z.string(),
    year: z.string(),
    status: z.string(),
    featured: z.boolean(),
    technologies: z.array(z.string()),
    repositoryUrl: z.url().optional(),
    demoUrl: z.url().optional(),
    coverImage: z.string(),
    coverAlt: z.string(),
    gallery: z.array(z.object({ src: z.string(), alt: z.string() })).default([]),
    problem: z.string(),
    responsibilities: z.array(z.string()),
    solution: z.string(),
    architecture: z.object({
      description: z.string(),
      nodes: z.array(z.string()),
    }),
    decisions: z.array(z.string()),
    challenges: z.array(z.string()),
    results: z.array(z.string()),
    lessonsLearned: z.array(z.string()),
  }),
});

export const collections = { projects };
