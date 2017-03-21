// @flow

import React from 'react'
import { connect } from 'react-redux'
import sameDomainCellValues from '../../store/grid-utils/same-domain-cell-values/sameDomainCellValues.js'
import validCellValues from '../../store/grid-utils/validCellValues.js'
import diffSet from '../../utils/diffSet.js'
import type { Cell as CellType, cellValue } from '../../store/grid-utils/types.js'

const CellSelect : Function = React.createClass({

  // ARCHITECTURE: possibleUserValues is derived from application state, and is not part of
  //               application state, ie it does not affect external Components.
  //               So, possible user values should be generated dynamically when needed
  //               and assigned to Component state.

  handleSelectClick() {

    var colIndex : number = -1;

    for (var rowIndex : number = 0, len = this.props.grid.length; rowIndex < len; rowIndex++) {
        colIndex = this.props.grid[rowIndex].indexOf(this.props.cellRef)
        if (colIndex !== -1) break
    }

    console.log(rowIndex)
    console.log(colIndex)

    const nonConflictingPossibleUserValues : Set<cellValue> = diffSet(
      new Set(validCellValues()),
      sameDomainCellValues(this.props.grid, rowIndex, colIndex, 'userValue')
    )

    console.log(nonConflictingPossibleUserValues)

    this.setState({possibleUserValues: [...nonConflictingPossibleUserValues]})
  },

  handleOptionClick() {
  },

  render() {

    return (
      <select name="possibleUserValues" onClick={(e) => this.handleSelectClick(e)}>
        <option value={null}>None</option>
        {this.state.possibleUserValues.map((value: cellValue) =>
          <option key={value} value={value}>{value}</option>
         )}
      </select>
    )
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

