
import React from 'react'
import {connect} from 'react-redux'

import actionTypes from '../../store/action-types.js'

import Row from '../Row/Row.jsx'

const Grid: Function = React.createClass({

  componentWillMount() {
    this.props.initialiseGrid()
    console.log('grid will mount')
  },

  render() {
    console.log('grid rendered')
    return (
      <div>
        <p>Grid has {this.props.grid.length} rows</p>
        <table>
          {this.props.grid.map((row) => <Row items={row} />)}
        </table>
      </div>)
  }
})

const mapStateToProps = (storeState: Object): Object => ({
  grid: storeState.grid
})

const mapDispatchToProps = (dispatch: Function): Object => ({
  initialiseGrid: () => dispatch({
    type: actionTypes.INITIALISE_GRID,
    grid: [[1,2], [3,4]]
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(Grid)
