/**
 * Content collections. Each News article is two Markdown files with the same
 * filename, one per language: src/content/news/en/<slug>.md and
 * src/content/news/zh/<slug>.md. The filename is the URL slug in both
 * languages (/news/<slug>/ and /zh/news/<slug>/).
 *
 * The schema is checked at build time, so a missing or misspelt field fails
 * the build instead of breaking the live page.
 */
import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    /** Standfirst under the headline; also the meta description */
    dek: z.string(),
    /** Key into newsCopy.categories (src/i18n/news.ts) */
    category: z.enum(['us-tax-basics']),
    /** Reading order (1 = first) and the numeral on the article cover */
    order: z.number().int().positive(),
    /** Real publication date only. Leave out until confirmed; no date is shown */
    date: z.coerce.date().optional(),
    /** Optional byline. Leave out rather than invent one */
    author: z.string().optional(),
    /** Article-specific note shown under the body */
    disclaimer: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { news };
