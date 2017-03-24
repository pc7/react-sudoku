// @flow

import actionTypes from '../actionTypes.js'
import type { action_gameWon } from '../grid-utils/types.js'

export default () : action_gameWon => ({
  type: actionTypes.GAME_WON,
})
