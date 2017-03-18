// @flow

import emptyGrid from '../empty-grid/emptyGrid.js'
import findSameDomainCells from './findSameDomainCells.js'

export default () => {

    const grid = emptyGrid(3, 3)

    const sameDomainCells = findSameDomainCells(grid, 4, 5)

    console.assert(sameDomainCells.size === 20, "findSameDomainCells returns " + sameDomainCells.size + " cells")

    console.assert(sameDomainCells.has(grid[4][0]), "findSameDomainCells doesn't include cell 4 0 in same row")
    console.assert(sameDomainCells.has(grid[4][8]), "findSameDomainCells doesn't include cell 4 8 in same row")
    console.assert(sameDomainCells.has(grid[4][3]), "findSameDomainCells doesn't include cell 4 3 in same row")

    console.assert(sameDomainCells.has(grid[0][5]), "findSameDomainCells doesn't include cell 0 5 in same column")
    console.assert(sameDomainCells.has(grid[7][5]), "findSameDomainCells doesn't include cell 7 5 in same column")

    console.assert(sameDomainCells.has(grid[5][3]), "findSameDomainCells doesn't include cell 5 3 in same square")

    console.assert(!sameDomainCells.has(grid[4][5]), "target cell is present within findSameDomainCells set")
}