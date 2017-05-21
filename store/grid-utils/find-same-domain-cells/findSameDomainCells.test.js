
import emptyGrid from '../empty-grid/emptyGrid.js'
import findSameDomainCells from './findSameDomainCells.js'

describe('finding cells in the same domain, ie same row, column and small square)', () => {

    const grid = emptyGrid(3, 3)
    const sameDomainCells = findSameDomainCells(grid, 4, 5)

    test('sample cell has 20 cells in the same domain', () => {

        expect(sameDomainCells.size).toBe(20)
    })

    test('The results for cells in the same domain as cell [4,5] do not include itself', () => {

        expect(sameDomainCells.has(grid[4][5])).toBe(false)
    })

    const cellsInSameDomain = [[4,0], [4,8], [4,3], [0,5], [7,5], [5,3], [3,5]]

    cellsInSameDomain.forEach(
        (coordinates) => {
            test('cell [' + coordinates[0] + ',' + coordinates[1] + '] is included in same domain as sample cell [4,5]', () => {

                expect(sameDomainCells.has(grid[coordinates[0]][coordinates[1]])).toBe(true)
            })
        }
    )
})
