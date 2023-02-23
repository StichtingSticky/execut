import { defineConfig } from 'astro/config'

// Import Astro integrations
import compress from 'astro-compress'
import critters from 'astro-critters'
import image from '@astrojs/image'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://execut.nl/',
  integrations: [
    critters(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    sitemap(),
    tailwind(),

    // Apply the `compress` integration last for best optimizations
    compress(),
  ],
})
