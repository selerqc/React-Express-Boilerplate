export function lazyImport(factory, name) {
  return Object.create({
    [name]: () => factory().then((module) => ({ default: module[name] })),
  })
}
