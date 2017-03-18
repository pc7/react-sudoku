// @flow

export default (smallSquareWidth: number, smallSquareHeight: number) => {

    // TODO: Create possibleValues by smallSquareWidth * smallSquareHeight
    const emptyCell = () : {actualValue: ?number} => ({
                       actualValue: null,
                       userValue: null,
                       possibleValues: new Set([1,2,3,4,5,6,7,8,9]),
                       isHidden: false
                      })

    let grid = []

    for (let i = 0; i < (smallSquareHeight * 3); i++) {

        let row = []

        for (let i = 0; i < (smallSquareWidth * 3); i++) {

            row = [...row, emptyCell()]
        }

        grid = [...grid, row]
    }

    return grid
}
