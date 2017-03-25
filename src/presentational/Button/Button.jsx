// @flow

import React from 'react'
import styles from './Button.css'

const Button : Function = (props : {content: string, handleClick: Function, isDisabled?: boolean}) => (
  <button className={styles.btn}
          onClick={props.handleClick}
          disabled={props.isDisabled || false}
          >
    {props.content}
  </button>
)

Button.propTypes = {
  content: React.PropTypes.string,
  handleClick: React.PropTypes.func,
}

export default Button
