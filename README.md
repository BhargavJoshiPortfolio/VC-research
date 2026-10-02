# European Pre-Seed Research

Venture-style investment research on early-stage European companies with strong technology and product, written from the point of view of an investor in Europe or the US. Published as a static website (Astro) and hosted on GitHub Pages.

**Status:** Phase 1 complete (11 companies shortlisted across five categories). Phase 2 (deep dives) in progress: one thesis done, for [Tellia](src/content/companies/tellia.md). The site is built but **not yet published**; publishing waits until four or five deep dives are done.

## What is on the site

| Page | Purpose |
|---|---|
| Home | Ranked scoreboard with interactive weight sliders, Europe map, pipeline |
| Methodology | How companies are found, researched and judged; source hierarchy; limits |
| Scorecard | The six weighted criteria, what each score means, the verdict scale |
| Companies | Filterable list (category, verdict, country, round size) and one page per company |
| Company page | Full thesis, radar chart, confidence badges, "what must be true" boxes, pre-mortem, founders' right of reply |
| One-page summary | Print-to-PDF summary of each finished thesis |
| Verdicts | Every verdict at a glance |
| Compare | Overlay two companies on the six criteria |
| Insights | Cross-portfolio themes and a first read on US and European investor fit |
| Changelog | What changed and when |

Every page has a social-preview (OpenGraph) image generated at build time, so links look good when shared on LinkedIn.

## The shortlist

| Category | Company | HQ | Round |
|----------|---------|----|-------|
| **Health and life sciences** | Klona Biotech | London, UK | $1.4M |
| | Immitra Bio | Switzerland | CHF 2.4M |
| **Robotics and automation** | Allonic | Hungary | €6M |
| | Motion | Brussels, BE | $2M |
| **Food and agriculture** | Tellia (deep dive done) | Paris, FR / San Francisco, US | $5M |
| | Backbone | Belgium | €4M |
| | Mycoverse | Denmark | €2.4M |
| **Energy, mobility and space** | Depotcharge | Munich, DE | €2.7M |
| | ORiS | Turin, IT | €4.5M |
| | Telura | Munich, DE | €4M |
| **Software and fintech** | finperks | Berlin, DE | €3.4M |

The longer Phase 1 notes, including a reserve list and rejected candidates, are in [shortlist.md](shortlist.md).

## Project layout

```
src/content/companies/   one Markdown file per company (data in the frontmatter, thesis in the body)
src/content/pages/       the methodology page
src/pages/               site pages and the social-preview image generator
src/components/          map, radar chart, scoreboard, cards
src/lib/dimensions.ts    the scoring framework (criteria, default weights, categories, verdicts)
src/config.ts            site settings: author, links, indexing switch, AI disclosure
src/data/changelog.ts    changelog entries
templates/               thesis template
.github/workflows/       GitHub Pages deployment
```

## Run it locally

Requires Node 22.12 or newer.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Add or finish a company

1. Create or edit `src/content/companies/<name>.md`. Copy `tellia.md` for a finished thesis, or any other file for a shortlist profile.
2. A company appears on the scoreboard, in compare and in the verdicts table once its frontmatter has `scores` (six numbers from 1 to 5) and a `verdict`. Set `status: thesis`.
3. Tag facts with `[V]` verified, `[R]` reported, `[C]` company claim or `[E]` estimate; the site turns them into badges.
4. Wrap the callouts in `<div class="callout callout-true">`, `callout-change` or `callout-premortem` as in the Tellia file.
5. Add a line to `src/data/changelog.ts` and update `updated` in the frontmatter.

## Publish (when ready)

Nothing is public until you push this repository to GitHub and turn Pages on.

1. Fill in the blanks in `src/config.ts` (LinkedIn, GitHub, contact email) and confirm the author name and the AI-assistance note.
2. Set `indexable: true` in `src/config.ts` so search engines may index the site. Until then every page carries a "noindex" tag.
3. Create the GitHub repository, push, then in Settings > Pages choose "GitHub Actions" as the source. The workflow in `.github/workflows/deploy.yml` builds and deploys on every push to `main`.
4. For a custom domain or a `<user>.github.io` repository, change `BASE_PATH` in the workflow to `/`.

## Method and caveats

- Companies were found through press coverage of 2026 funding rounds (EU-Startups, Tech.eu, Vestbee, TFN and sector outlets) and each company's own announcements.
- Figures are as reported and mostly self-reported by the companies. Deep dives cross-check against primary sources where possible.
- This is **desk research**: no access to founders, customers, financials or cap tables. Conclusions are hypotheses with stated confidence.
- Views on US or European investor fit are the author's own judgement.
- Not investment advice.
