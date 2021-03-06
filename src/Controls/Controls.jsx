// @flow

import React from 'react'
import { connect } from 'react-redux'

import Button from '../presentational/Button/Button.jsx'
import Range from '../presentational/Range/Range.jsx'

import generateGrid from '../../store/action-creators/generateGrid.js'
import removeIncorrectUserValues from '../../store/action-creators/removeIncorrectUserValues.js'
import styles from './Controls.css'

import gameReset from '../../store/action-creators/gameReset.js'
import type { Cell } from '../../store/grid-utils/types.js'

const Controls : Function = props => (

  <section>
    <Button content="New game"
            handleClick={(e) => props.newGame(props.hiddenCells)}
            />
    <Button content="Remove incorrect entries"
            handleClick={(e) => props.removeIncorrectUserValues(props.grid)}
            isDisabled={props.gameWon}
            />
    <div className={styles.controlsSegment}>
      <span className={styles.gameText}>Hidden squares for next new game (use slider): {props.hiddenCells}</span>
    </div>
    <div className={styles.controlsSegment}>
      <Range min={1}
             max={(props.smallSqWidth * 3 * props.smallSqHeight * 3) - 1}
             step={1}
             defaultValue={props.hiddenCells}
             handleChange={(e) => props.setHiddenCells(Number(e.target.value))}
             />
      <span className={styles.gameText + ' ' + styles.gameTextWon}>{props.gameWon ? 'Game Won!' : ''}</span>
    </div>
  </section>
)

Controls.propTypes = {
  smallSqWidth: React.PropTypes.number,
  smallSqHeight: React.PropTypes.number,
  hiddenCells: React.PropTypes.number,
  setHiddenCells: React.PropTypes.func
}

const mapStateToProps = (storeState: Object): Object => ({
  grid: storeState.grid,
  gameWon: storeState.gameWon
})

const mapDispatchToProps = (dispatch: Function): Object => ({
  newGame: (hiddenCells: number) => {
    dispatch(generateGrid(3, 3, hiddenCells))
    dispatch(gameReset())
  },
  removeIncorrectUserValues: (grid: Cell[][]) => dispatch(removeIncorrectUserValues(grid)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls)

