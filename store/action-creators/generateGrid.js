// @flow

import actionTypes from '../actionTypes.js'
import emptyGrid from '../grid-utils/empty-grid/emptyGrid.js'
import findSameDomainCells from '../grid-utils/find-same-domain-cells/findSameDomainCells.js'

import type { Cell, cellValue } from '../grid-utils/types.js'

export default (): Object => {

    let grid = emptyGrid(3, 3)

    for (var i = 0, len = grid.length; i < len; i++) {

        let row = grid[i]

        for (let j = 0, len = row.length; j < len; j++) {

            const sameDomainCellValues : Set<?cellValue> = new Set(
              [...findSameDomainCells(grid, i, j)]
                .map((cell : Cell) : ?cellValue => cell.actualValue)
                .filter((value : ?cellValue) : boolean => value !== null)
            )

            const nonConflictingPossibleValues : Set<cellValue> = new Set([...row[j].possibleValues].filter(x => !sameDomainCellValues.has(x)))

            if (nonConflictingPossibleValues.size) {
                //console.log(nonConflictingPossibleValues)
                //row[j].actualValue = [...nonConflictingPossibleValues][0]  // TODO: randomise this.
                // remove selected value from possibleValues
            } else {
                // set cell.actualValue to null
                // reset cell.possibleValues to [1..9]
                // backtrack to previous cell
            }            
        }
    }

    return {
      type: actionTypes.INITIALISE_GRID,
      grid: grid
    }
}
