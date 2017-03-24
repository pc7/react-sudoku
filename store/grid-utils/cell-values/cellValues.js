// @flow

import type { Cell, cellValue, cellValueProperty } from '../types.js'

export default (cells: Set<Cell>, valueProperty: cellValueProperty) : Set<?cellValue> => new Set(
  [...cells]
    .map((cell : Cell) : ?cellValue => cell[valueProperty])
    .filter((value : ?cellValue) : boolean => value !== null)
)
