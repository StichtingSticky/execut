import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

import typography from '@tailwindcss/typography'

export default {
  content: ['./src/**/*.{astro,js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'inherit': colors.inherit,
      'current': colors.current,
      'transparent': colors.transparent,
      'black': colors.black,
      'white': colors.white,
      'brown': '#433032',
      'background': '#fffaf8',
      'subtle-highlight': '#f2e8e9',
      'primary': {
        DEFAULT: '#ef4955',
        'light': '#f26d77',
        'highlight': '#f7c0c2',
      },
      'secondary': {
        DEFAULT: '#f7974d',
        'light': '#f5a86d',
        'highlight': '#f8dfcb',
      },
      'accent': {
        DEFAULT: '#43a095',
        'light': '#6ed9d2',
        'highlight': '#b3e1dc',
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      'sans-serif': `"Ubuntu", "Helvetica Neue", Helvetica, Arial, sans-serif`,
      'serif': `"Lora", Georgia, serif`,
      'mono': `"Ubuntu Mono", "Courier New", monospace`,
    },
  },
  plugins: [typography],
} satisfies Config
