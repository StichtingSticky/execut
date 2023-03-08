import { compilerOptions } from 'tsconfig.json'

const { paths } = compilerOptions

const assets = import.meta.glob(`/src/**/*.*`, {
  import: 'default',
  eager: true,
})

export const resolve = (path: string): any => {
  // Check if an prefix is present in the path
  const match = path.match(/^(\$[^\/]+)\/(.*)$/)

  if (match) {
    // Find the prefix as defined in `tsconfig.json`
    const prefix = Object.entries(paths)
      .find(([path, _]) => path.includes(match[1]))

    // Update path if mach was found
    path = (prefix && `/${prefix[1][0].replace(/\*$/, match[2])}`) || path
  }

  if (!(path in assets)) throw new Error(`Unable to find asset ${path}`)

  return assets[path]
}
