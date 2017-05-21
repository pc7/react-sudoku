
import emptyGrid from '../empty-grid/emptyGrid.js'
import findCellCoordinates from './findCellCoordinates.js'

describe('coordinates of cell object in grid discovered', () => {

    const grid = emptyGrid(3, 3)

    test('cell coordinates for cell [3,7] discovered correctly', () => {

        expect(findCellCoordinates(grid, grid[3][7])).toMatchObject({rowIndex: 3, colIndex: 7})
    })

    test('cell coordinates for cell object external to grid discovered correctly', () => {

        expect(findCellCoordinates(grid, Object.assign({}, grid[3][7]))).toMatchObject({rowIndex: -1, colIndex: -1})
    })
})
