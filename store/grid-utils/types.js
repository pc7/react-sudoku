

// ARCHITECTURE: This assumes a standard 9x9 grid, will need changing if not.
export type cellNum = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

// TODO: possibleValues Set type
export type Cell = {
  actualValue: ?cellNum,
  userValue: ?cellNum,
  isHidden: boolean,
}