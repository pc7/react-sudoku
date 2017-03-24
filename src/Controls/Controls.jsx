// @flow

import React from 'react'
import { connect } from 'react-redux'
import generateGrid from '../../store/action-creators/generateGrid.js'
import removeIncorrectUserValues from '../../store/action-creators/removeIncorrectUserValues.js'
import type { Cell } from '../../store/grid-utils/types.js'

// TODO: Move button to presentational component.
const Controls : Function = React.createClass({

  newGame() {
    this.props.newGame()
  },

  removeIncorrectEntries() {

  },

  render() {

    return (
      <section>
        <button onClick={(e) => this.newGame()}>New game</button>
        <button onClick={(e) => this.props.removeIncorrectUserValues(this.props.grid)}>Remove incorrect entries</button>
      </section>
    )
  }
})

const mapStateToProps = (storeState: Object): Object => ({
  grid: storeState.grid
})

const mapDispatchToProps = (dispatch: Function): Object => ({
  newGame: () => dispatch(generateGrid()),
  removeIncorrectUserValues: (grid: Cell[][]) => dispatch(removeIncorrectUserValues(grid)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls)

