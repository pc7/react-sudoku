// @flow

import React from 'react'
import {connect} from 'react-redux'
import generateGrid from '../../store/action-creators/generateGrid.js'
import Row from '../Row/Row.jsx'

const Grid : Function = React.createClass({

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
  initialiseGrid: () => dispatch(generateGrid())
})

export default connect(mapStateToProps, mapDispatchToProps)(Grid)

