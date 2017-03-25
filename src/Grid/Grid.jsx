// @flow

import React from 'react'
import {connect} from 'react-redux'
import generateGrid from '../../store/action-creators/generateGrid.js'
import Row from '../Row/Row.jsx'

const Grid : Function = React.createClass({

  componentWillMount() {
    this.props.initialiseGrid(this.props.smallSqWidth, this.props.smallSqHeight, this.props.hiddenCells)
  },

  render() {

    return (
      <table>
        <tbody>
          {this.props.grid.map((row) => <Row key={this.props.grid.indexOf(row)} items={row} />)}
        </tbody>
      </table>)
  }
})

Grid.propTypes = {
  smallSqWidth: React.PropTypes.number,
  smallSqHeight: React.PropTypes.number,
  hiddenCells: React.PropTypes.number
}

const mapStateToProps = (storeState: Object): Object => ({
  grid: storeState.grid
})

const mapDispatchToProps = (dispatch: Function): Object => ({
  initialiseGrid: (smallSqWidth: number, smallSqHeight: number, hiddenCells: number) => dispatch(generateGrid(smallSqWidth, smallSqHeight, hiddenCells))
})

export default connect(mapStateToProps, mapDispatchToProps)(Grid)

