
import React from 'react'

const Row = props => (
  <tr>
    {
     props.items.map((item: Object) =>
       <td key={item.actualValue}>
         {!item.isHidden ? item.actualValue : null}
       </td>)
    }
  </tr>
)

Row.propTypes = {
  items: React.PropTypes.array,
}

export default Row
