// @flow

import emptyGrid from './emptyGrid.js'

export default () => {

    const generatedGrid = emptyGrid(3, 3)

    console.assert(generatedGrid.length === 9, "generated grid has 9 rows")
    console.assert(generatedGrid[0].length === 9, "generated grid has 9 cols")

    // test that contents of rows, cols and small squares are correct.

    console.assert((new Set(generatedGrid[0]).size === 9), "generated grid doesn't contain 9 different values in first row")
}