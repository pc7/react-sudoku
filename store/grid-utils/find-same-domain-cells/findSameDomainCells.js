// @flow

import type { Cell, gridIndex } from '../types.js'

// TRANSLITERATION: Returns a set of cells in the same row, column and square as the argument, excluding the argument cell itself.
export default (grid: Cell[][], cellRow: gridIndex, cellCol: gridIndex) : Set<Cell> => {

    // TODO: Copy and freeze grid

    // TRANSLITERATION: Get the top row and left column of the small square.
    const cellsInSameSquare : Set<Cell> = new Set()
    const smallSquareWidth = 3
    const smallSquareHeight = 3
    // TODO: Cast these expressions to gridIndex instead of using number.
    const topRow : number = Math.floor(cellRow / 3) * smallSquareWidth
    const leftCol : number = Math.floor(cellCol / 3) * smallSquareHeight

    for (var x = topRow; x < topRow+smallSquareWidth; x++) {

        for (let y = leftCol; y < leftCol+smallSquareHeight; y++) {

           cellsInSameSquare.add(grid[x][y]) 
        }
    }

    const cellsInSameDomain : Set<Cell> = new Set(
      [...grid[cellRow], ...grid.map((row: Cell[]) => row[cellCol]), ...cellsInSameSquare]
    )

    cellsInSameDomain.delete(grid[cellRow][cellCol])

    return cellsInSameDomain
}
