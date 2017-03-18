// @flow

import type { Cell } from '../types.js'

// TRANSLITERATION: Returns cells in the same row, column and square as the argument, excluding the argument cell itself.
export default (grid: Cell[][], cellRow: number, cellCol: number) : Set<Cell> => {

    // TODO: Throw exception if cellRow and cellCol are not in 0-8 range, or create a type that enforces this and supports maths operations.

    // TRANSLITERATION: Get the top row and left column of the small square.
    const cellsInSameSquare : Set<Cell> = new Set()
    const smallSquareWidth = 3
    const smallSquareHeight = 3
    const topRow : number = Math.floor(cellRow / 3) * smallSquareWidth
    const leftCol : number = Math.floor(cellCol / 3) * smallSquareHeight

    for (var x = topRow; x < topRow+smallSquareWidth; x++) {

        for (let y = leftCol; y < leftCol+smallSquareHeight; y++) {

           cellsInSameSquare.add(grid[x][y]) 
        }
    }

    return new Set(
      [...grid[cellRow], ...grid.map((row: Cell[]) => row[cellCol]), ...cellsInSameSquare].filter(
        (cell: Cell) : boolean => cell !== grid[cellRow][cellCol]
      )
    )
}
