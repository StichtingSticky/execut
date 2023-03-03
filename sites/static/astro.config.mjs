import { defineConfig } from 'astro/config'

// Import Astro integrations
import compress from 'astro-compress'
import critters from 'astro-critters'
import image from '@astrojs/image'
import sitemap from '@astrojs/sitemap'
import storyblok from '@storyblok/astro'
import tailwind from '@astrojs/tailwind'

const {
  STORYBLOK_ACCESS_TOKEN,
  STORYBLOK_REGION,
} = import.meta.env

// https://astro.build/config
export default defineConfig({
  site: 'https://execut.nl/',
  integrations: [
    critters(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    sitemap(),
    storyblok({
      accessToken: STORYBLOK_ACCESS_TOKEN,
      components: {},
      apiOptions: {
        region: STORYBLOK_REGION ?? 'eu'
      },
    }),
    tailwind(),

    // Apply the `compress` integration last for best optimizations
    compress(),
  ],
})
