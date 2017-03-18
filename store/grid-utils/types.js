// @flow

// ARCHITECTURE: This assumes a standard 9x9 grid, will need changing if not.
export type cellValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
export type gridIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export type Cell = {
  actualValue: ?cellValue,
  userValue: ?cellValue,
  possibleValues: Set<cellValue>,
  isHidden: boolean
}