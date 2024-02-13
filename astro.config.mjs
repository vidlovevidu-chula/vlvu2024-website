import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
import netlify from '@astrojs/netlify';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    output: "server",
    site: 'https://vlvu2024-website.vercel.app/',
    adapter: netlify(),
    integrations: [react(), tailwind()],
});
