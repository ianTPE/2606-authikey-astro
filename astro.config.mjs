// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Fully static site — no adapter. The Cloudflare adapter emitted a
// dist/client/wrangler.json containing a SESSION KV binding without an id,
// which Cloudflare Pages rejects at deploy time. Plain static output to
// ./dist needs no worker, no KV, no generated wrangler config.
//
// `site` is required for @astrojs/sitemap to emit absolute URLs.
export default defineConfig({
	site: 'https://authikey.com',
	integrations: [sitemap()],
});
