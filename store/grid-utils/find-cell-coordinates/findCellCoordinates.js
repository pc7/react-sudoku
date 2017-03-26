// @flow

import type { Cell } from '../types.js'

export default (grid: Cell[][], cellRef: Cell) : {rowIndex: number, colIndex: number} => {

    // ALTERNATIVE: Could return a Map instead.

    var colIndex : number = -1;

    for (var rowIndex : number = 0, len = grid.length; rowIndex < len; rowIndex++) {
        if ((colIndex = grid[rowIndex].indexOf(cellRef)) !== -1) return {rowIndex: rowIndex, colIndex: colIndex}
    }

    return {rowIndex: -1, colIndex: -1}
}
