// @flow

import React from 'react'
import { connect } from 'react-redux'
import type { Cell as CellType, cellValue } from '../../store/grid-utils/types.js'

const CellSelect : Function = React.createClass({

  // ARCHITECTURE: possibleUserValues is derived from application state, and is not part of
  //               application state, ie it does not affect external Components.
  //               So, possible user values should be generated dynamically when needed
  //               and assigned to Component state.

  handleSelectClick() {
    // assign possibleUserValues to Component state.
    //this.props.initialiseGrid()
  },

  handleOptionClick() {
    //this.props.initialiseGrid()
  },

  render() {

    return (
      <select name="possibleUserValues" onClick={(e) => this.handleSelectClick(e)}>
        <option value={null}>None</option>
      </select>
    )
    // other option elements...
    //{this.state.possibleUserValues.map((value: cellValue) =>
    //  <option key={value} value={value}>{value}</option>
    // )}
  }
})

CellSelect.propTypes = {
  cellRef: React.PropTypes.object,
}

const mapStateToProps = (storeState: Object): Object => ({
  grid: storeState.grid
})

const mapDispatchToProps = (dispatch: Function): Object => ({
//  initialiseGrid: () => dispatch(generateGrid())
})

export default connect(mapStateToProps, mapDispatchToProps)(CellSelect)

