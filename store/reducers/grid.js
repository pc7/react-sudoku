// @flow

import actionTypes from '../action-types.js'

export default (segmentState: Object={}, action: Object): Object => {

    switch (action.type) {

        case actionTypes.INITIALISE_GRID:
            return {}

        default:
            return segmentState
    }
}
