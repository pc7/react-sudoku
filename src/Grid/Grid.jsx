// @flow

import React from 'react'
import { connect } from 'react-redux'

import styles from './Grid.css'
import generateGrid from '../../store/action-creators/generateGrid.js'
import Row from '../Row/Row.jsx'

const Grid : Function = React.createClass({

  componentWillMount() {
    this.props.initialiseGrid(this.props.smallSqWidth, this.props.smallSqHeight, this.props.hiddenCells)
  },

  render() {

    return (
      <table className={styles.grid}>
        <tbody>
          {this.props.grid.map((row) => <Row key={this.props.grid.indexOf(row)} items={row} gameWon={this.props.gameWon} />)}
        </tbody>
      </table>
    )
  }
})

Grid.propTypes = {
  smallSqWidth: React.PropTypes.number,
  smallSqHeight: React.PropTypes.number,
  hiddenCells: React.PropTypes.number
}

const mapStateToProps = (storeState: Object): Object => ({
  grid: storeState.grid,
  gameWon: storeState.gameWon
})

const mapDispatchToProps = (dispatch: Function): Object => ({
  initialiseGrid: (smallSqWidth: number, smallSqHeight: number, hiddenCells: number) => dispatch(generateGrid(smallSqWidth, smallSqHeight, hiddenCells))
})

export default connect(mapStateToProps, mapDispatchToProps)(Grid)
