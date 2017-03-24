// @flow

import React from 'react'
import { connect } from 'react-redux'
import generateGrid from '../../store/action-creators/generateGrid.js'

const Controls : Function = React.createClass({

  newGame() {
    this.props.newGame()
  },

  render() {

    return (
      <section>
        <button onClick={(e) => this.newGame()}>New game</button>
      </section>
    )
  }
})

const mapStateToProps = (storeState: Object): Object => ({
  //grid: storeState.grid
})

const mapDispatchToProps = (dispatch: Function): Object => ({
  newGame: () => dispatch(generateGrid())
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls)

