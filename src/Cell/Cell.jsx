
import React from 'react'

const Cell = props => (
   <td>
     {!item.isHidden ? item.actualValue : item.userValue}
   </td>
)

Cell.propTypes = {
  item: React.PropTypes.object,
}

export default Cell
