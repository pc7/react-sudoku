// @flow

import React from 'react'

const Range : Function = (props : {
  min: number,
  max: number,
  step: number,
  defaultValue: number,
  handleChange: Function
  }) => (
    <input type="range"
           min={props.min}
           max={props.max}
           step={props.step}
           defaultValue={props.defaultValue}
           onChange={props.handleChange}
           />
)

Range.propTypes = {
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  step: React.PropTypes.number,
  defaultValue: React.PropTypes.number,
  handleChange: React.PropTypes.func
}

export default Range
