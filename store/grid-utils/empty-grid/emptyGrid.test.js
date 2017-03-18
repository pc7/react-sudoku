// @flow

import emptyGrid from './emptyGrid.js'

export default () => {

    const generatedGrid = emptyGrid(3, 3)

    console.assert(generatedGrid.length === 9, "generated grid has 9 rows")
    console.assert(generatedGrid[0].length === 9, "generated grid has 9 cols")

    console.assert((new Set(generatedGrid[0]).size === 9), "generated grid doesn't contain 9 different cells in first row")

    generatedGrid[0].length = 3
    generatedGrid[1].length = 3
    generatedGrid[2].length = 3
    console.assert((new Set([...generatedGrid[0], ...generatedGrid[1], ...generatedGrid[2]]).size) === 9, "generated grid doesn't contain 9 different cells in top left square")
}