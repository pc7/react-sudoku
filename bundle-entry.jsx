// @flow

import React from 'react'
import ReactDOM from 'react-dom'

import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'

import grid from './store/reducers/grid.js'

ReactDOM.render(
  <Provider store={createStore(combineReducers({grid}))}>
    <p>Content</p>
  </Provider>,
  document.getElementById('react-container')
)
