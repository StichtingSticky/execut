import { defineConfig } from 'astro/config'

// Import Astro integrations
import compress from 'astro-compress'
import critters from 'astro-critters'
// import image from '@astrojs/image'
import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  // Make use of the new `<Image />` component
  experimental: { assets: true },

  // The production site will be hosted here
  site: 'https://execut.nl/',
  integrations: [
    critters(),
    // image({
    //   serviceEntryPoint: '@astrojs/image/sharp',
    // }),
    sitemap(),
    svelte(),
    tailwind(),

    // Apply the `compress` integration last for best optimizations
    compress(),
  ],
  image: { service: 'astro/assets/services/sharp' },
})
