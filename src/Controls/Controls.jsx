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
               max={(this.props.smallSqWidth * 3 * this.props.smallSqHeight * 3) - 1}
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
  smallSqWidth: React.PropTypes.number,
  smallSqHeight: React.PropTypes.number,
  hiddenCells: React.PropTypes.number,
  setHiddenCells: React.PropTypes.func
}

const mapStateToProps = (storeState: Object): Object => ({
  grid: storeState.grid,
  gameWon: storeState.gameWon
})

const mapDispatchToProps = (dispatch: Function): Object => ({
  newGame: (hiddenCells: number) => {
    dispatch(generateGrid(3, 3, hiddenCells))
    dispatch(gameReset())
  },
  removeIncorrectUserValues: (grid: Cell[][]) => dispatch(removeIncorrectUserValues(grid)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls)

