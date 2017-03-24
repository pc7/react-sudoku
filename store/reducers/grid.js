// @flow

import actionTypes from '../actionTypes.js'
import type { Cell } from '../grid-utils/types.js'

export default (segmentState: Cell[][] =[], action: Object): Cell[][] => {

    switch (action.type) {

        case actionTypes.INITIALISE_GRID:
            return action.grid

        // ALTERNATIVE: A cell object could have its own segment reducer composed within
        //              the grid reducer, however this would require that the store is
        //              updated on every iteration of the grid generation process.
        case actionTypes.SET_USER_VALUE:
            return action.grid

        case actionTypes.REMOVE_INCORRECT_USER_VALUES:
            return action.grid

        default:
            return segmentState
    }
}
