export const resolve = (slug: string): any => {
  const result = Object.entries(
    import.meta.glob(`/src/assets/**/*.*`, {
      import: 'default',
      eager: true,
    }),
  ).find(([path, _]) => path.includes(slug))

  if (!result) throw new Error('unable to find asset')

  const [_, asset] = result

  return asset
}
