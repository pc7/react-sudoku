// @flow

export default (grid: any, cellRow: number, cellCol: number) : Array<Object> => {
/*
    // TODO: Freeze grid

    // TODO: Throw exception if coordinates not in argument grid

    const cellsInSameRow : Array<Object> = grid[cellRow].map(
        (cell: Object) : Object => cell
    )

    let cellsInSameCol : Array<Object> = []

    grid.forEach((row) => {cellsInSameCol = [...cellsInSameCol, row[cellCol]]})

    // TRANSLITERATION: Get the top row and left column of the small square.
    let cellsInSameSmallSquare : Array<Object> = []
    const smallSquareWidth = 3
    const smallSquareHeight = 3
    const topRow : number = Math.floor(cellRow / 3) * smallSquareWidth
    const leftCol : number = Math.floor(cellCol / 3) * smallSquareHeight

    for (var x = topRow; x < topRow+smallSquareWidth; x++) {

        for (let y = leftCol; y < leftCol+smallSquareHeight; y++) {

           cellsInSameSmallSquare.push(grid[x][y]) 
        }
    }

    const cellsInSameDomains = new Set([...cellsInSameRow, ...cellsInSameCol, ...cellsInSameSmallSquare])

    cellsInSameDomains.delete(grid[cellRow][cellCol])

    return cellsInSameDomains
*/ return []
}
