// @flow

import React from 'react'

const Button : Function = (props : {content: string, handleClick: Function, isDisabled?: boolean}) => (
  <button onClick={props.handleClick}
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
