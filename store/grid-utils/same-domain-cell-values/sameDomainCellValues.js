// @flow

import findSameDomainCells from '../find-same-domain-cells/findSameDomainCells.js'
import type { Cell, cellValue } from '../types.js'

export default (grid: Cell[][], rowIndex : number, colIndex: number, valuePropertyName: string) : Set<?cellValue> => new Set(
  [...findSameDomainCells(grid, rowIndex, colIndex)]
    .map((cell : Cell) : ?cellValue => cell[valuePropertyName])
    .filter((value : ?cellValue) : boolean => value !== null)
)
