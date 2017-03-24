// @flow

import actionTypes from '../actionTypes.js'
import type { action_gameReset } from '../grid-utils/types.js'

export default () : action_gameReset => ({
  type: actionTypes.GAME_RESET,
})
