// @flow

import randomInt from '../../../utils/randomInt.js'

import type { Cell } from '../types.js'

export default (grid: Cell[][], hiddenCells: number) : Cell[][] => {

    while (hiddenCells) {

        const targetCell = grid[randomInt(grid.length)][randomInt(grid[0].length)]

        if (!targetCell.isHidden) {
            targetCell.isHidden = true
            hiddenCells--
        }
    }

    return grid
}
