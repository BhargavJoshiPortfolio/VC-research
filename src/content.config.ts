import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const score = z.number().min(1).max(5);

const companies = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/companies' }),
  schema: z.object({
    name: z.string(),
    status: z.enum(['shortlist', 'thesis']),
    category: z.enum([
      'Health and life sciences',
      'Robotics and automation',
      'Food and agriculture',
      'Energy, mobility and space',
      'Software and fintech',
    ]),
    subsector: z.string(),
    aiNative: z.boolean().default(false),
    hq: z.object({
      city: z.string(),
      country: z.string(),
      lat: z.number(),
      lon: z.number(),
      note: z.string().optional(),
    }),
    founded: z.number().optional(),
    offering: z.string(),
    website: z.string().url().optional(),
    round: z.object({
      label: z.string(),
      eurM: z.number(), // approximate, in millions of euros, used for filtering
      date: z.string(),
      lead: z.string(),
    }),
    investors: z.array(z.string()).default([]),
    // The fields below exist only once a deep dive is finished.
    scores: z
      .object({ team: score, insight: score, product: score, evidence: score, market: score, model: score })
      .optional(),
    verdict: z.enum(['Invest', 'Invest, conditional', 'Watch', 'Pass']).optional(),
    verdictLine: z.string().optional(),
    caseSummary: z.object({ insight: z.string(), scale: z.string(), team: z.string() }).optional(),
    keyFacts: z.array(z.object({ label: z.string(), value: z.string(), tag: z.enum(['V', 'R', 'C', 'E']).optional() })).optional(),
    topRisks: z.array(z.string()).optional(),
    mustBeTrue: z.array(z.string()).optional(),
    updated: z.coerce.date(),
    analysisDate: z.string().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/pages' }),
  schema: z.object({ title: z.string(), description: z.string() }),
});

export const collections = { companies, pages };
