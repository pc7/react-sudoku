// @flow

import actionTypes from '../actionTypes.js'

export default (segmentState: number[] =[], action: Object): number[] => {

    switch (action.type) {

        case actionTypes.INITIALISE_GRID:
            return action.grid

        default:
            return segmentState
    }
}
