
import emptyGrid from '../empty-grid/emptyGrid.js'
import setActualValues from './setActualValues.js'

describe('grid with actualValues created', () => {

    const grid = setActualValues(emptyGrid(3, 3))
    const rowActualValues = grid[7].map((cell) => cell.actualValue)

    test('contains 9 different actualValues in 8th row', () => {

        expect(new Set([...rowActualValues]).size).toBe(9)
    })

    test('sum of actualValues in 8th row is 45', () => {

        expect(rowActualValues.reduce((total, value) => total + value)).toBe(45)
    })
})
