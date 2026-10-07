// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/wiki": "https://wiki.shiftos.dev",
    "/videos": "https://www.youtube.com/@ShiftOS"
  },
  integrations: [react()]
});
