
import React from 'react'

const Cell = props => (
   <td>
     {!item.isHidden ? item.actualValue : item.userValue}
   </td>
)

Row.propTypes = {
  item: React.PropTypes.object,
}

export default Row
