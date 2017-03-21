// @flow

import React from 'react'
import CellComponent from '../Cell/Cell.jsx'

const Cell : Function = (props : {item: CellComponent}) => (
   <td>
     {!props.item.isHidden ? props.item.actualValue : props.item.userValue}
   </td>
)

Cell.propTypes = {
  item: React.PropTypes.object,
}

export default Cell
