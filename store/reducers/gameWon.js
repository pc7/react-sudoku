// @flow

import actionTypes from '../actionTypes.js'

export default (segmentState: boolean =false, action: Object): boolean => {

    switch (action.type) {

        case actionTypes.GAME_WON:
            return true

        case actionTypes.GAME_RESET:
            return false

        default:
            return segmentState
    }
}
