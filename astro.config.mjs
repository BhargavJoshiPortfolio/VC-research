import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import { remarkConfidence } from './src/plugins/remark-confidence.mjs';

// Deployed to GitHub Pages by .github/workflows/deploy.yml, which sets these two variables.
// Locally they are unset, so the site runs at "/".
const site = process.env.SITE_URL || undefined;
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  markdown: {
    // The unified processor is used so the confidence-tag plugin can run over the Markdown.
    processor: unified({ remarkPlugins: [remarkConfidence] }),
  },
});
