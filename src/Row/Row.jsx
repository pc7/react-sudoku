// @flow

import React from 'react'
import Cell from '../Cell/Cell.jsx'
import styles from './Row.css'
import type { Cell as CellType } from '../../store/grid-utils/types.js'

const Row : Function = (props : {items: CellType[], gameWon: boolean}) => (
  <tr className={styles.row}>
    {props.items.map((item: CellType) =>
       <Cell item={item} key={item.actualValue} gameWon={props.gameWon} />
     )}
  </tr>
)

Row.propTypes = {
  items: React.PropTypes.array,
  gameWon: React.PropTypes.bool
}

export default Row
