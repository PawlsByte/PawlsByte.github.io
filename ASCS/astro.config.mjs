import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

// IMPORTANT:
// - Set `site` to your GitHub Pages URL.
// - Set `base` to `/<your-repo-name>/` for a project site.
// Defaulting to repo name: nadca-ascs-prep
export default defineConfig({
  site: 'https://PawlsByte.github.io/ASCS',
  base: '/ASCS/',
  integrations: [react(), mdx()],
  output: 'static'
});
