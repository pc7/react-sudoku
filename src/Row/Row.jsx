
import React from 'react'

const Row = props => (
  <tr>
    {props.items.map((item: number) => <td key={item}>{item}</td>)}
  </tr>
)

Row.propTypes = {
  items: React.PropTypes.array,
}

export default Row
