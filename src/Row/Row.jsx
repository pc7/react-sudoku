
import React from 'react'

const Row = props => (
  <tr>
    {this.props.items.map((item: number) => <td>{item}</td>)}
  </tr>
)

Row.propTypes = {
  items: React.PropTypes.array,
}

export default Row
