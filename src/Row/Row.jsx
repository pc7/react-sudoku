
import React from 'react'
import CellComponent from '../Cell/Cell.jsx'
import type { Cell } from '../types.js'

const Row = props => (
  <tr>
    {props.items.map((item: CellComponent) =>
       <Cell item={item} key={item.actualValue} />
     )}
  </tr>
)

Row.propTypes = {
  items: React.PropTypes.array,
}

export default Row
