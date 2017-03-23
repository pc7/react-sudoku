// @flow

import React from 'react'
import { connect } from 'react-redux'
import sameDomainCellValues from '../../store/grid-utils/same-domain-cell-values/sameDomainCellValues.js'
import findCellCoordinates from '../../store/grid-utils/find-cell-coordinates/findCellCoordinates.js'
import validCellValues from '../../store/grid-utils/validCellValues.js'
import diffSet from '../../utils/diffSet.js'
import type { Cell as CellType, cellValue } from '../../store/grid-utils/types.js'

const CellSelect : Function = React.createClass({

  // ARCHITECTURE: possibleUserValues is derived from application state, and is not part of
  //               application state, ie it does not affect external Components.
  //               So, possible user values should be generated dynamically when needed
  //               and assigned to Component state.

  getInitialState() {
    return {possibleUserValues: []}
  },

  handleSelectFocus() {

    const coordinates = findCellCoordinates(this.props.grid, this.props.cellRef)

    const nonConflictingPossibleUserValues : Set<cellValue> = diffSet(
      new Set(
        validCellValues()),
        new Set([
          ...sameDomainCellValues(this.props.grid, coordinates.rowIndex, coordinates.colIndex, 'actualValue'),
          ...sameDomainCellValues(this.props.grid, coordinates.rowIndex, coordinates.colIndex, 'userValue')
        ])
    )

    this.setState({possibleUserValues: [...nonConflictingPossibleUserValues]})
  },

  handleOptionClick() {
    const grid = Object.assign({}, this.props.grid)
  },

  render() {

    return (
      <select name="possibleUserValues" onFocus={(e) => this.handleSelectFocus(e)}>
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

