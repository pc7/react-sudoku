
import React from 'react'
import {connect} from 'react-redux'

import actionTypes from '../../store/action-types.js'

import Row from '../Row/Row.jsx'

const Grid: Function = React.createClass({

  componentWillMount() {
    this.props.initialiseGrid()
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

const mapStateToProps = (storeState: Object): Object => ({
  grid: storeState.grid
})

const mapDispatchToProps = (dispatch: Function): Object => ({
  initialiseGrid: () => dispatch({
    type: actionTypes.INITIALISE_GRID,
    grid: [[
            {actualValue: 5, userValue: null, isHidden: false},
            {actualValue: 6, userValue: null, isHidden: false}
           ],
           [
            {actualValue: 7, userValue: null, isHidden: false},
            {actualValue: 8, userValue: null, isHidden: false}
           ]],
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(Grid)
