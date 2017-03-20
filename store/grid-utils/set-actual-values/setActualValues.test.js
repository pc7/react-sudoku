// @flow

import emptyGrid from '../empty-grid/emptyGrid.js'
import setActualValues from './setActualValues.js'

export default () => {

    const grid = setActualValues(emptyGrid(3, 3))

    const rowActualValues = grid[7].map((cell) => cell.actualValue)

    console.assert((new Set([...rowActualValues]).size) === 9, "generated grid doesn't contain 9 different actualValues in 8th row")
    console.assert(rowActualValues.reduce((total, value) => total + value) === 45, "setActualValues doesn't set 8th row actualValues to total 45")
}