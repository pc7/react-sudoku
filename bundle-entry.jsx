// @flow

import React from 'react'
import ReactDOM from 'react-dom'

import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'

import grid from './store/reducers/grid.js'

import Grid from './src/Grid/Grid.jsx'

ReactDOM.render(
  <Provider store={createStore(combineReducers({grid}))}>
    <Grid />
  </Provider>,
  document.getElementById('react-container')
)
