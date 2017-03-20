// @flow

import actionTypes from '../actionTypes.js'
import emptyGrid from '../grid-utils/empty-grid/emptyGrid.js'
import setActualValues from '../grid-utils/set-actual-values/setActualValues.js'
import setHiddenCells from '../grid-utils/set-hidden-cells/setHiddenCells.js'

import type { action_initialiseGrid } from '../grid-utils/types.js'

export default () : action_initialiseGrid => ({
  type: actionTypes.INITIALISE_GRID,
  grid: setHiddenCells(setActualValues(emptyGrid(3, 3)), 5)
})
