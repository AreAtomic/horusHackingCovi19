export const dispatch = method => {
  let beforeMiddlewares = method.before || []
  let afterMiddlewares = method.after || []
  return [...beforeMiddlewares, method, ...afterMiddlewares]
}
