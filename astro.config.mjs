import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://66thandbyrnes.com',
  scopedStyleStrategy: 'class',
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap({
      lastmod: new Date(),
    }),
  ],
})
