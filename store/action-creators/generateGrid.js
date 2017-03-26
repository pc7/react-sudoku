// @flow

import actionTypes from '../actionTypes.js'
import emptyGrid from '../grid-utils/empty-grid/emptyGrid.js'
import setActualValues from '../grid-utils/set-actual-values/setActualValues.js'
import setHiddenCells from '../grid-utils/set-hidden-cells/setHiddenCells.js'

import type { action_initialiseGrid } from '../grid-utils/types.js'

// TODO: Remove properties that are used in grid generation and don't need to be part of application state,
//       eg possibleActualValues
export default (smallSqWidth: number, smallSqHeight: number, hiddenCells: number) : action_initialiseGrid => ({
  type: actionTypes.INITIALISE_GRID,
  grid: setHiddenCells(setActualValues(emptyGrid(smallSqWidth, smallSqHeight)), hiddenCells)
})
