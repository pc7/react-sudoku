// @flow

import sameDomainCellValues from '../same-domain-cell-values/sameDomainCellValues.js'
import diffSet from '../../../utils/diffSet.js'
import randomInt from '../../../utils/randomInt.js'

import type { Cell, cellValue } from '../types.js'
import validCellValues from '../validCellValues.js'

export default (grid: Cell[][]) : Cell[][] => {

    // ALTERNATIVE: Could copy the 'grid' argument and return the copy, if wanting immutability.

    for (var rowIndex = 0, len = grid.length; rowIndex < len; rowIndex++) {

        let row = grid[rowIndex]

        for (let colIndex = 0, len = row.length; colIndex < len; colIndex++) {

            const sameDomainCellValues2 : Set<?cellValue> = sameDomainCellValues(grid, rowIndex, colIndex, 'actualValue')

            const nonConflictingPossibleActualValues : Set<cellValue> = diffSet(row[colIndex].possibleActualValues, sameDomainCellValues2)

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

                    // TODO: Bug here causes grid not to be generated on intermittent renderings.
                    //       Works fine if this clause is not invoked.
                    debugger

                    // Else, jump back to the last square on the previous row.
                    colIndex = grid[rowIndex].length-1
                    rowIndex = rowIndex - 2
                    break
                }
            }            
        }
    }

    return grid
}
