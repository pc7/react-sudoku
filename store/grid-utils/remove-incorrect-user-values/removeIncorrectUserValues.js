// @flow

import type { Cell } from '../types.js'

export default (grid: Cell[][]) : Cell[][] => {

console.log('remove')

    const g = [...grid]

    for (let rowIndex : number = 0, len = g.length; rowIndex < len; rowIndex++) {

        for (let colIndex : number = 0, len = g[0].length; colIndex < len; colIndex++) {

            if (g[rowIndex][colIndex].actualValue !== g[rowIndex][colIndex].userValue) {
                g[rowIndex][colIndex].userValue = null
            }
        }
    }

    return g
}
