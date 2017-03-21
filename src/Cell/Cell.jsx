// @flow

import React from 'react'
import type { Cell as CellType } from '../../store/grid-utils/types.js'

const Cell : Function = (props : {item: CellType}) => (
   <td>
     {!props.item.isHidden ? props.item.actualValue : props.item.userValue}
   </td>
)

Cell.propTypes = {
  item: React.PropTypes.object,
}

export default Cell
