// @flow

import actionTypes from '../actionTypes.js'
import emptyGrid from '../grid-utils/empty-grid/emptyGrid.js'
import findSameDomainCells from '../grid-utils/find-same-domain-cells/findSameDomainCells.js'

export default (): Object => {

    let grid = emptyGrid(3, 3)

    for (var i = 0, len = grid.length; i < len; i++) {

        let row = grid[i]

        for (let j = 0, len = row.length; j < len; j++) {

            //const nonConflictingValues = findSameDomainCells(grid, i, j)

            //if (nonConflictingValues.size) {
            //    console.log(nonConflictingValues)
            //}
            //row[j].actualValue = j+1
        }
    }

    return {
      type: actionTypes.INITIALISE_GRID,
      grid: grid
    }
}
