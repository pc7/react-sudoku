// @flow

import emptyGrid from '../empty-grid/emptyGrid.js'
import findSameDomainCells from './findSameDomainCells.js'

export default () => {

    const grid = emptyGrid(3, 3)

    const sameDomainCells = findSameDomainCells(grid, 4, 5)

    // build test
    console.assert(false)

    console.assert(sameDomainCells.size === 8, "findSameDomainCells returns " + sameDomainCells.size + " cells")

    // same row
    console.assert(sameDomainCells.has(grid[4][0]))
    console.assert(sameDomainCells.has(grid[4][8]))
    console.assert(sameDomainCells.has(grid[4][3]))

    // same col
    console.assert(sameDomainCells.has(grid[0][5]))
    console.assert(sameDomainCells.has(grid[7][5]))

    // same square
    console.assert(sameDomainCells.has(grid[5][3]))

    console.assert(!sameDomainCells.has(grid[4][5]), "target cell is present within findSameDomainCells() set")
}