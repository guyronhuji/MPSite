import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    lang: z.enum(["en", "he", "ar", "de"]),
    path: z.string().min(1),
    title: z.string(),
    navTitle: z.string().optional(),
    summary: z.string().optional(),
    showInNav: z.boolean().default(true),
    order: z.number().default(100),
    updatedAt: z.string().optional(),
  }),
});

export const collections = {
  pages,
};
