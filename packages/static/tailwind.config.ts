import type { Config } from 'tailwindcss'

import typography from '@tailwindcss/typography'

export default {
  content: ['./src/**/*.{astro,js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'white': '#fff',
      'off-white': '#fffaf8',
      'subtle-highlight': '#f2e8e9',
      'red': '#ef4955',
      'red-highlight': '#f7c0c2',
      'light-red': '#ff7276',
      'orange': '#f7974d',
      'orange-highlight': '#f8dfcb',
      'green': '#43a095',
      'green-highlight': '#b3e1dc',
      'brown': '#433032',
      'black': '#000',
    },
    container: {
      center: true,
      padding: '2rem',
    },
    fontFamily: {
      'sans-serif': `"Ubuntu", "Helvetica Neue", Helvetica, Arial, sans-serif`,
      'serif': `"Lora", Georgia, serif`,
      'mono': `"Ubuntu Mono", "Courier New", monospace`,
    },
  },
  plugins: [typography],
} satisfies Config
