import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Preview temporário no GitHub Pages (repositório = subpasta, não domínio próprio).
// O deploy final continua usando o domínio da cliente, sem base path.
const isGithubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  site: isGithubPages ? 'https://arthurvieira19.github.io' : 'https://www.kellycavalcante.com.br',
  base: isGithubPages ? '/Site-Kelly/' : '/',
  output: 'static',
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
});
