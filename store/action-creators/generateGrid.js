// @flow

import actionTypes from '../actionTypes.js'
import emptyGrid from '../grid-utils/empty-grid/emptyGrid.js'
import findSameDomainCells from '../grid-utils/find-same-domain-cells/findSameDomainCells.js'

import type { Cell, cellValue } from '../grid-utils/types.js'

export default (): Object => {

    let grid = emptyGrid(3, 3)

    for (var rowIndex = 0, len = grid.length; rowIndex < len; rowIndex++) {

        let row = grid[rowIndex]

        for (let colIndex = 0, len = row.length; colIndex < len; colIndex++) {

            const sameDomainCellValues : Set<?cellValue> = new Set(
              [...findSameDomainCells(grid, rowIndex, colIndex)]
                .map((cell : Cell) : ?cellValue => cell.actualValue)
                .filter((value : ?cellValue) : boolean => value !== null)
            )

            const nonConflictingPossibleValues : Set<cellValue> = new Set([...row[colIndex].possibleValues].filter(x => !sameDomainCellValues.has(x)))

            if (nonConflictingPossibleValues.size) {

                const value = [...nonConflictingPossibleValues][Math.floor(Math.random() * nonConflictingPossibleValues.size)]
                row[colIndex].actualValue = value
                row[colIndex].possibleValues.delete(value)
            } else {

                row[colIndex].actualValue = null
                row[colIndex].possibleValues = new Set([1,2,3,4,5,6,7,8,9])

                if (colIndex !== 0) {
                    // If the current square is not at the end of its row, jump back to the previous square.
                    colIndex = colIndex - 2
                } else {
                    // Else, jump back to the last square on the previous row.
                    colIndex = grid[rowIndex].length-1
                    rowIndex = rowIndex - 2
                    break
                }
            }            
        }
    }

    return {
      type: actionTypes.INITIALISE_GRID,
      grid: grid
    }
}
