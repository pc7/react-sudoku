// @flow

import actionTypes from '../actionTypes.js'
import emptyGrid from '../grid-utils/empty-grid/emptyGrid.js'
import setActualValues from '../grid-utils/set-actual-values/setActualValues.js'

import type { action_initialiseGrid } from '../grid-utils/types.js'

export default () : action_initialiseGrid => {

    const grid = setActualValues(emptyGrid(3, 3))

    return {
      type: actionTypes.INITIALISE_GRID,
      grid: grid
    }
}
