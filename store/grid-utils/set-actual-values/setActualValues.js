// @flow

import cellValues from '../cell-values/cellValues.js'
import findSameDomainCells from '../find-same-domain-cells/findSameDomainCells.js'
import diffSet from '../../../utils/diffSet.js'
import randomInt from '../../../utils/randomInt.js'

import type { Cell, cellValue } from '../types.js'
import validCellValues from '../validCellValues.js'

export default (grid: Cell[][]) : Cell[][] => {

    // ALTERNATIVE: Could copy the 'grid' argument and return the copy, if wanting immutability.

    let isBacktrack : boolean = false

    rowLoop: for (let rowIndex = 0, len = grid.length; rowIndex < len; rowIndex++) {

        const row = grid[rowIndex]

        for (let colIndex = isBacktrack ? grid[rowIndex].length-1 : 0, len = row.length; colIndex < len; colIndex++) {

            isBacktrack = false

            const nonConflictingPossibleActualValues : Set<cellValue> = diffSet(
              row[colIndex].possibleActualValues,
              cellValues(new Set([...findSameDomainCells(grid, rowIndex, colIndex)]), 'actualValue')
            )

            if (nonConflictingPossibleActualValues.size) {

                const value = [...nonConflictingPossibleActualValues][randomInt(nonConflictingPossibleActualValues.size)]
                row[colIndex].actualValue = value
                row[colIndex].possibleActualValues.delete(value)
            } else {

                row[colIndex].actualValue = null
                row[colIndex].possibleActualValues = new Set(validCellValues())

                if (colIndex !== 0) {
                    // If the current square is not at the end of its row, jump back to the previous square.
                    colIndex = colIndex - 2
                } else {

                    // Else, jump back to the last square on the previous row.
                    rowIndex = rowIndex - 2
                    isBacktrack = true
                    continue rowLoop
                }
            }
        }
    }

    return grid
}
