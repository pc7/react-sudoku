// @flow

import React from 'react'
import { connect } from 'react-redux'

import Button from '../presentational/Button/Button.jsx'
import Range from '../presentational/Range/Range.jsx'

import generateGrid from '../../store/action-creators/generateGrid.js'
import removeIncorrectUserValues from '../../store/action-creators/removeIncorrectUserValues.js'

import gameReset from '../../store/action-creators/gameReset.js'
import type { Cell } from '../../store/grid-utils/types.js'

const Controls : Function = React.createClass({

  render() {

    // TODO: grid[0].length isn't available on initial rendering, needs fixing.
    const totalSquares : number = (this.props.grid.length * this.props.grid.length)

    return (
      <section>
        <Button content="New game"
                handleClick={(e) => this.props.newGame(this.props.hiddenCells)}
                />
        <Button content="Remove incorrect entries"
                handleClick={(e) => this.props.removeIncorrectUserValues(this.props.grid)}
                isDisabled={this.props.gameWon}
                />
        <Range min={1}
               max={totalSquares - 1}
               step={1}
               defaultValue={this.props.hiddenCells}
               handleChange={(e) => this.props.setHiddenCells(e.target.value)}
               />
        <span>{this.props.gameWon ? 'Game Won!' : ''}</span>
      </section>
    )
  }
})

Controls.propTypes = {
  hiddenCells: React.PropTypes.number,
  setHiddenCells: React.PropTypes.func
}

const mapStateToProps = (storeState: Object): Object => ({
  grid: storeState.grid,
  gameWon: storeState.gameWon
})

const mapDispatchToProps = (dispatch: Function): Object => ({
  newGame: (hiddenCells: number) => {
    dispatch(generateGrid(hiddenCells))
    dispatch(gameReset())
  },
  removeIncorrectUserValues: (grid: Cell[][]) => dispatch(removeIncorrectUserValues(grid)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls)

