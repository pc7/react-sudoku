
import React from 'react'

//TODO: replace key with item.actualValue

const Row = props => (
  <tr>
    {
     props.items.map((item: Object) =>
       <td key={Math.random()}>
         {!item.isHidden ? item.actualValue : null}
       </td>)
    }
  </tr>
)

Row.propTypes = {
  items: React.PropTypes.array,
}

export default Row
