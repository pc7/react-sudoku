// @flow

import actionTypes from '../action-types.js'

export default (): Object => {

    let grid = []

    const emptyCell = () => ({
                       actualValue: 1,
                       userValue: null,
                       possibleValues: new Set([1,2,3,4,5,6,7,8,9]),
                       isHidden: false
                      })

    for (let i = 0; i < 9; i++) {

        let row = []

        for (let j = 0; j < 9; j++) {

            row = [...row, emptyCell()]
        }

        grid = [...grid, row]
    }

    return {
      type: actionTypes.INITIALISE_GRID,
      grid: grid
    }
}
