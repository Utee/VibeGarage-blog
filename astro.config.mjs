import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://blog.vibegarage.app', 
	integrations: [mdx(), sitemap()],
});