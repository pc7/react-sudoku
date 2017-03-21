// @flow

import type { Cell, cellValue } from '../types.js'
import validCellValues from '../validCellValues.js'

export default (smallSquareWidth: number, smallSquareHeight: number) : Cell[][] => {

    // TODO: Create possibleValues by smallSquareWidth * smallSquareHeight
    const emptyCell = () : Cell => ({
      actualValue: null,
      userValue: null,
      possibleActualValues: new Set(validCellValues()),
      possibleUserValues: new Set(validCellValues()),
      isHidden: false
    })

    let grid = []

    for (let i = 0; i < (smallSquareHeight * 3); i++) {

        let row = []

        for (let i = 0; i < (smallSquareWidth * 3); i++) {

            row = [...row, emptyCell()]
        }

        grid = [...grid, row]
    }

    return grid
}
