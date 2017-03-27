// @flow

import React from 'react'
import { connect } from 'react-redux'

import cellValues from '../../store/grid-utils/cell-values/cellValues.js'
import findSameDomainCells from '../../store/grid-utils/find-same-domain-cells/findSameDomainCells.js'
import checkForWin from '../../store/grid-utils/check-for-win/checkForWin.js'
import findCellCoordinates from '../../store/grid-utils/find-cell-coordinates/findCellCoordinates.js'
import validCellValues from '../../store/grid-utils/validCellValues.js'

import setUserValue from '../../store/action-creators/setUserValue.js'
import gameWon from '../../store/action-creators/gameWon.js'

import diffSet from '../../utils/diffSet.js'

import type { Cell as CellType, cellValue } from '../../store/grid-utils/types.js'

const CellSelect : Function = React.createClass({

  // ARCHITECTURE: possibleUserValues is derived from application state, and is not part of
  //               application state, ie it does not affect external Components.
  //               So, possible user values should be generated dynamically when needed
  //               and assigned to Component state.

  getInitialState: () => ({possibleUserValues: []}),

  handleSelectFocus() {

    const coordinates = findCellCoordinates(this.props.grid, this.props.cellRef)

    const sameDomainCells = findSameDomainCells(
                              this.props.grid,
                              coordinates.rowIndex,
                              coordinates.colIndex
                            )

    const nonConflictingPossibleUserValues : Set<cellValue> = diffSet(
      new Set(
        validCellValues()),
        new Set([
          ...cellValues(new Set(
                              [...sameDomainCells]
                               .filter((c: CellType): boolean => !c.isHidden)
                            ), 'actualValue'),
          ...cellValues(new Set([...sameDomainCells]), 'userValue')
        ])
    )

    this.setState({possibleUserValues: [...nonConflictingPossibleUserValues]})
  },

  handleChange(e) {
    const coordinates = findCellCoordinates(this.props.grid, this.props.cellRef)
    this.props.setUserValue(
      this.props.grid,
      coordinates.rowIndex,
      coordinates.colIndex,
      e.nativeEvent.target.value ? Number(e.nativeEvent.target.value) : null
    )
  },

  render() {

    return (
      <select className={this.props.className}
              name="possibleUserValues"
              onFocus={(e) => this.handleSelectFocus(e)}
              onChange={(e) => this.handleChange(e)}
              >
                  
        <option value={''}>None</option>
        {this.state.possibleUserValues.map((value: cellValue) =>
          <option key={value} value={value} >{value}</option>
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
  setUserValue: (grid, rowIndex, colIndex, value) => {
    dispatch(setUserValue(grid, rowIndex, colIndex, value))
    if (checkForWin(grid)) dispatch(gameWon())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CellSelect)

