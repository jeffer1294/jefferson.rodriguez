import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    category: z.enum(["research", "policy", "innovation"]),
    role: z.string(),
    org: z.string(),
    period: z.string(),
    order: z.number().default(99),
    featured: z.boolean().default(false),
    summary: z.string(),
    methods: z.array(z.string()).default([]),
    location: z.string().optional(),
    cover: z.string().optional(),
    // Optional photo gallery shown at the bottom of the project page.
    // Each item: { src: "/images/projects/xx.jpg", caption?: "..." }
    gallery: z
      .array(z.object({ src: z.string(), caption: z.string().optional() }))
      .default([]),
    embed: z.string().optional(), // YouTube/Vimeo embed URL, e.g. https://www.youtube.com/embed/VIDEO_ID
    links: z
      .array(z.object({ label: z.string(), url: z.string() }))
      .default([]),
  }),
});

export const collections = { projects };
