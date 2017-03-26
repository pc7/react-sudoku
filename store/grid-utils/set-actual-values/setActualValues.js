// @flow

import cellValues from '../cell-values/cellValues.js'
import findSameDomainCells from '../find-same-domain-cells/findSameDomainCells.js'
import diffSet from '../../../utils/diffSet.js'
import randomInt from '../../../utils/randomInt.js'

import type { Cell, cellValue } from '../types.js'
import validCellValues from '../validCellValues.js'

export default (grid: Cell[][]) : Cell[][] => {

    /* TRANSLITERATION:
     * Backtrack algorithm. A Cell's actualValue is a dead end if the next Cell cannot have a valid value.
     * In this case, a different actualValue for the previous Cell must be generated.
     * Backtrack example, showing the top two rows:
     * 1 2 3  4 5 6  7 8 9
     * 6 5 4  3 2 1  . . .
     * Here, the next Cell cannot be assigned a value, as the actualValues 7, 8 and 9 exist within the same 3x3 square domain.
     * The Cell with the actualValue '1' needs to have its actualValue reassigned, as the actualValue '1' is a dead end.
     * Values 7, 8 and 9 will also be tried in that position, but ultimately several Cells will need to be backtracked in this case.
     */

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
                    // TRANSLITERATION: If the current square is not at the end of its row, jump back to the previous square.
                    colIndex = colIndex - 2
                } else {

                    // TRANSLITERATION: Else, jump back to the last square on the previous row.
                    rowIndex = rowIndex - 2
                    isBacktrack = true
                    continue rowLoop
                }
            }
        }
    }

    return grid
}
