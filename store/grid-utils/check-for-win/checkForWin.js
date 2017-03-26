// @flow

import type { Cell } from '../types.js'

export default (grid: Cell[][]) : boolean => {

    // ARCHITECTURE: Shallow copy.
    const g = [...grid]

    for (let rowIndex : number = 0, len = g.length; rowIndex < len; rowIndex++) {

        for (let colIndex : number = 0, len = g[0].length; colIndex < len; colIndex++) {

            if (g[rowIndex][colIndex].isHidden && 
                (g[rowIndex][colIndex].actualValue !== g[rowIndex][colIndex].userValue)) {
                return false
            }
        }
    }

    return true
}
