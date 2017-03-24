// @flow

import React from 'react'
import { connect } from 'react-redux'
import generateGrid from '../../store/action-creators/generateGrid.js'
import removeIncorrectUserValues from '../../store/action-creators/removeIncorrectUserValues.js'
import type { Cell } from '../../store/grid-utils/types.js'

// TODO: Move button to presentational component.
// TODO: Lift hiddenCells state up to parent component, number is duplicated in Grid component.
const Controls : Function = React.createClass({

  getInitialState: () => ({hiddenCells: 40}),

  render() {

    // TODO: grid[0].length isn't available on initial rendering, needs fixing.
    const totalSquares : number = (this.props.grid.length * this.props.grid.length)

    return (
      <section>
        <button onClick={(e) => this.props.newGame(this.state.hiddenCells)}>New game</button>
        <button onClick={(e) => this.props.removeIncorrectUserValues(this.props.grid)}>Remove incorrect entries</button>
        <input type="range"
               min="1"
               max={totalSquares - 1}
               step="1"
               defaultValue={this.state.hiddenCells}
               onChange={(e) => this.setState({hiddenCells: e.target.value})}
               />
      </section>
    )
  }
})

const mapStateToProps = (storeState: Object): Object => ({
  grid: storeState.grid
})

const mapDispatchToProps = (dispatch: Function): Object => ({
  newGame: (hiddenCells: number) => dispatch(generateGrid(hiddenCells)),
  removeIncorrectUserValues: (grid: Cell[][]) => dispatch(removeIncorrectUserValues(grid)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls)

