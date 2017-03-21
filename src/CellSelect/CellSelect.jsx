// @flow

import React from 'react'
import type { Cell as CellType, cellValue } from '../../store/grid-utils/types.js'

const CellSelect : Function = (props : {cellRef: CellType}) => (
  <select name="possibleUserValues">
    <option value={null}>None</option>
  </select>
)
    // other option elements...
    //{props.cellRef.possibleUserValues.map((value: cellValue) =>
    //  <option key={value} value={value}>{value}</option>
    // )}

CellSelect.propTypes = {
  cellRef: React.PropTypes.object,
}

export default CellSelect
