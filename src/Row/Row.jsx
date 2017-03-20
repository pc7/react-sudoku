
import React from 'react'
import CellComponent from '../Cell/Cell.jsx'
import type { Cell } from '../../store/grid-utils/types.js'

const Row = props => (
  <tr>
    {props.items.map((item: Cell) =>
       <CellComponent item={item} key={item.actualValue} />
     )}
  </tr>
)

Row.propTypes = {
  items: React.PropTypes.array,
}

export default Row
