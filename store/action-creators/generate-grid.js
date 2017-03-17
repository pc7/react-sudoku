// @flow

import actionTypes from '../action-types.js'
import emptyGrid from '../grid-utils/emptyGrid.js'

export default (): Object => {

    let grid = emptyGrid(3, 2)

    for (let i = 0, len = grid.length; i < len; i++) {

        let row = grid[i]

        for (let i = 0, len = row.length; i < len; i++) {

            // NOTE: placeholder
            row[i].actualValue = i+1
        }
    }

    return {
      type: actionTypes.INITIALISE_GRID,
      grid: grid
    }
}
