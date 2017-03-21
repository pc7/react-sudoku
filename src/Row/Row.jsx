// @flow

import React from 'react'
import Cell from '../Cell/Cell.jsx'
import type { Cell as CellType } from '../../store/grid-utils/types.js'

const Row : Function = (props : {items: CellType[]}) => (
  <tr>
    {props.items.map((item: CellType) =>
       <Cell item={item} key={item.actualValue} />
     )}
  </tr>
)

Row.propTypes = {
  items: React.PropTypes.array,
}

export default Row
