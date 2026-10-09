// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://nagalingeshwara1963-design.github.io',
  base: '/TC-WEB-AND-STUDIO',
  vite: {
    plugins: [tailwindcss()]
  }
});