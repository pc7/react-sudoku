// @flow

export default (A : Set<any>, B : Set<any>) : Set<any> => new Set(
  [...A].filter(value => !B.has(value))
)
