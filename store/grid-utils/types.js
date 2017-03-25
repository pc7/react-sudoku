// @flow

import actionTypes from '../actionTypes.js'

// ARCHITECTURE: This assumes a standard 9x9 grid, will need changing if not.
export type cellValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
export type gridIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
export type cellValueProperty = 'actualValue' | 'userValue'

// ARCHITECTURE: possibleUserValues is only needed when isHidden is 'true',
//               and could be made nullable to replace isHidden.
//               The two properties are separated to make the statements more descriptive.
export type Cell = {
  actualValue: ?cellValue,
  userValue: ?cellValue,
  possibleActualValues: Set<cellValue>,
  possibleUserValues: Set<cellValue>,
  isHidden: boolean
}

export type action_initialiseGrid = {
  type: actionTypes.INITIALISE_GRID,
  grid: Cell[][]
}

export type action_setUserValue = {
  type: actionTypes.SET_USER_VALUE,
  grid: Cell[][]
}

export type action_removeIncorrectUserValues = {
  type: actionTypes.REMOVE_INCORRECT_USER_VALUES,
  grid: Cell[][]
}

export type action_gameWon = {
  type: actionTypes.GAME_WON,
}

export type action_gameReset = {
  type: actionTypes.GAME_RESET,
}

