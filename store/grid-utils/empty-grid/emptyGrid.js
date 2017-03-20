// @flow

import type { Cell, cellValue } from '../types.js'

export default (smallSquareWidth: number, smallSquareHeight: number) : Cell[][] => {

    // TODO: Create possibleValues by smallSquareWidth * smallSquareHeight
    const emptyCell = () : Cell => ({
      actualValue: null,
      userValue: null,
      possibleActualValues: new Set([1,2,3,4,5,6,7,8,9]),
      possibleUserValues: new Set([1,2,3,4,5,6,7,8,9]),
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
