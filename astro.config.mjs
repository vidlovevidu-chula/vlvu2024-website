import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    output: 'hybrid',
    trailingSlash: "always",
    adapter: vercel(),
    integrations: [react(), tailwind()],
});
