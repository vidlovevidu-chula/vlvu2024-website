import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    output: "server",
    site: 'https://main--vlvu2024-me.netlify.app/',
    adapter: netlify(),
    integrations: [react(), tailwind()],
});
