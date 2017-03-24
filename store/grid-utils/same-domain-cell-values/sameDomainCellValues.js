// @flow

import findSameDomainCells from '../find-same-domain-cells/findSameDomainCells.js'
import cellValues from '../cell-values/cellValues.js'
import type { Cell, cellValue, cellValueProperty } from '../types.js'

export default (grid: Cell[][], rowIndex : number, colIndex: number, valuePropertyName: cellValueProperty) : Set<?cellValue> =>
    cellValues(new Set([...findSameDomainCells(grid, rowIndex, colIndex)]), valuePropertyName)
