// @flow

export default (grid: any, cellRow: number, cellCol: number) => {

    // TODO: Throw exception if coordinates not in argument grid

    const valuesInSameRow : Array<?number> = grid[cellRow].map(
        (cell: Object) : ?number => cell.actualValue
    )

    let valuesInSameCol : Array<?number> = []

    grid.forEach((row) => {valuesInSameCol = [...valuesInSameCol, row[cellCol].actualValue]})

    // TODO: Remove null from returned set

    return new Set([...valuesInSameRow, ...valuesInSameCol])
}
