
import emptyGrid from './emptyGrid.js'

describe('3x3 generated grid', () => {

    const generatedGrid = emptyGrid(3, 3)

    test('has row length of 9', () => {

        expect(generatedGrid).toHaveLength(9)
    })

    test('has column length of 9', () => {

        expect(generatedGrid[0]).toHaveLength(9)
    })

    test('has 9 different object references in the first row, ie no duplicate references to the same object', () => {

        expect(new Set(generatedGrid[0]).size).toBe(9)
    })

    test('has 9 different object references in the top left small square, ie no duplicate references to the same object', () => {

        expect(new Set([...generatedGrid[0].slice(0, 3), ...generatedGrid[1].slice(0, 3), ...generatedGrid[2].slice(0, 3)]).size).toBe(9)
    })
})
