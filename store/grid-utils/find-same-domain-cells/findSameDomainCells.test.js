
import emptyGrid from '../empty-grid/emptyGrid.js'
import findSameDomainCells from './findSameDomainCells.js'

describe('finding cells in the same domain, ie same row, column and small square)', () => {

    const grid = emptyGrid(3, 3)
    const sameDomainCells = findSameDomainCells(grid, 4, 5)

    test('sample cell has 20 cells in the same domain', () => {

        expect(sameDomainCells.size).toBe(20)
    })

    test('The results for cells in the same domain as cell [4,0] do not include itself', () => {

        expect(sameDomainCells.has(grid[4][0])).toBe(true)
    })

    test('cell [4,0] is included in same domain as sample cell [4,5]', () => {

        expect(sameDomainCells.has(grid[4][0])).toBe(true)
    })

    test('cell [4,8] is included in same domain as sample cell [4,5]', () => {

        expect(sameDomainCells.has(grid[4][8])).toBe(true)
    })

    test('cell [4,3] is included in same domain as sample cell [4,5]', () => {

        expect(sameDomainCells.has(grid[4][3])).toBe(true)
    })

    test('cell [0,5] is included in same domain as sample cell [4,5]', () => {

        expect(sameDomainCells.has(grid[0][5])).toBe(true)
    })

    test('cell [7,5] is included in same domain as sample cell [4,5]', () => {

        expect(sameDomainCells.has(grid[7][5])).toBe(true)
    })

    test('cell [5,3] is included in same domain as sample cell [4,5]', () => {

        expect(sameDomainCells.has(grid[5][3])).toBe(true)
    })

    test('cell [3,5] is included in same domain as sample cell [4,5]', () => {

        expect(sameDomainCells.has(grid[3][5])).toBe(true)
    })
})
