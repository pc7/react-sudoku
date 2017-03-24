// @flow

import actionTypes from '../actionTypes.js'
import removeIncorrectUserValues from '../grid-utils/remove-incorrect-user-values/removeIncorrectUserValues.js'

import type { Cell, action_removeIncorrectUserValues } from '../grid-utils/types.js'

export default (grid: Cell[][]) : action_removeIncorrectUserValues => ({
  type: actionTypes.REMOVE_INCORRECT_USER_VALUES,
  grid: removeIncorrectUserValues(grid)
})
