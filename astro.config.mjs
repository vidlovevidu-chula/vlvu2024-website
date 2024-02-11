import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: "https://vlvu2024-website.vercel.app/",
    output: "server",
    adapter: vercel(),
    integrations: [react(), tailwind()],
});
