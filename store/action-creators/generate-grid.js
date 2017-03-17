// @flow

import actionTypes from '../action-types.js'
import emptyGrid from '../grid-utils/emptyGrid.js'
import nonConflictingValues from '../grid-utils/nonConflictingValues.js'

export default (): Object => {

    let grid = emptyGrid(3, 3)

    for (var i = 0, len = grid.length; i < len; i++) {

        let row = grid[i]

        for (let j = 0, len = row.length; j < len; j++) {

            // NOTE: placeholder
            row[j].actualValue = j+1
            nonConflictingValues(grid, i, j)
        }
    }

    return {
      type: actionTypes.INITIALISE_GRID,
      grid: grid
    }
}
