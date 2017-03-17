// @flow

import actionTypes from '../action-types.js'

export default (): Object => ({
    type: actionTypes.INITIALISE_GRID,
    grid: [[
            {actualValue: 1, userValue: null, isHidden: false},
            {actualValue: 2, userValue: null, isHidden: false}
           ],
           [
            {actualValue: 3, userValue: null, isHidden: false},
            {actualValue: 4, userValue: null, isHidden: false}
           ]],
})
