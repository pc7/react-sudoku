
import React from 'react'

const Cell = props => (
   <td>
     {!props.item.isHidden ? props.item.actualValue : props.item.userValue}
   </td>
)

Cell.propTypes = {
  item: React.PropTypes.object,
}

export default Cell
