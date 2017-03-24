// @flow

import actionTypes from '../actionTypes.js'
import type { Cell, cellValue, action_setUserValue } from '../grid-utils/types.js'

export default (grid : Cell[][], rowIndex : number, colIndex : number, value: cellValue) : action_setUserValue => {

    const g = [...grid]
    g[rowIndex][colIndex].userValue = value

    return {
      type: actionTypes.SET_USER_VALUE,
      grid: g
    }
}
