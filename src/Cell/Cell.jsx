
import React from 'react'

const Cell = props => (
   <td>
     {!this.props.item.isHidden ? this.props.item.actualValue : this.props.item.userValue}
   </td>
)

Cell.propTypes = {
  item: React.PropTypes.object,
}

export default Cell
