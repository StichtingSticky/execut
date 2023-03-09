/** @type {import('prettier').Config} */
module.exports = {
  semi: false,
  singleQuote: true,
  quoteProps: 'consistent',
  trailingComma: 'all',
  bracketSameLine: true,
  plugins: [
    require('@prettier/plugin-xml'),
    require('prettier-plugin-astro'),
    require('prettier-plugin-tailwindcss'),
    require('prettier-plugin-svelte'),
  ],
  overrides: [
    { files: '*.astro', options: { parser: 'astro' } },
    { files: '*.svelte', options: { parser: 'svelte' } },
  ],
}
