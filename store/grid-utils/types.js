// @flow

import actionTypes from '../actionTypes.js'

// ARCHITECTURE: This assumes a standard 9x9 grid, will need changing if not.
export type cellValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
export type gridIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
export type cellValueProperty = 'actualValue' | 'userValue'

// TODO: gridIndex enums must accept number operations.
// http://stackoverflow.com/questions/38825773/flowtype-string-incompatible-with-string-enum

const gridIndex22 = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8
};

export type gridIndex2 = $Keys<typeof gridIndex22>;


export type typeTest = "a" | "b" | "c" | 1

export type A = 0
export type B = 1
export type C = 2
type D = 3
type E = 4
type F = 5
type G = 6
type H = 7
type I = 8

export type gridIndex3 = A | B | C | D | E | F | G | H | I

// ARCHITECTURE: possibleUserValues is only needed when isHidden is 'true', and could be made nullable to replace isHidden.
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

