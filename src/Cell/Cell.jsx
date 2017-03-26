// @flow

import React from 'react'
import CellSelect from '../CellSelect/CellSelect.jsx'
import styles from './Cell.css'
import type { Cell as CellType } from '../../store/grid-utils/types.js'

const Cell : Function = (props : {item: CellType}) => (
  <td className={styles.cell + ' ' + (!props.item.isHidden ? styles.revealed : '')}>
    {!props.item.isHidden ? props.item.actualValue : props.item.userValue}
    {!props.item.isHidden ? null : <CellSelect cellRef={props.item}/>}
  </td>
)

Cell.propTypes = {
  item: React.PropTypes.object,
}

export default Cell
