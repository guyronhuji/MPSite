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
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "./src/content/publications" }),
  schema: z.object({
    updated: z
      .union([z.string(), z.date()])
      .optional()
      .transform((value) => {
        if (value === undefined) return undefined;
        return typeof value === "string" ? value : value.toISOString().slice(0, 10);
      }),
    items: z.array(
      z.object({
        id: z.string().optional(),
        year: z.number().optional(),
        status: z.enum(["published", "forthcoming"]).default("published").optional(),
        type: z.enum(["book", "edited_volume", "chapter", "article", "other"]).optional(),
        title: z.string().optional(),
        authors: z.string().optional(),
        venue: z.string().optional(),
        details: z.string().optional(),
        doi: z.string().optional(),
        url: z.string().optional(),
      }),
    ),
  }),
});

export const collections = {
  pages,
  publications,
};
