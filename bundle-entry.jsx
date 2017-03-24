// @flow

import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import grid from './store/reducers/grid.js'

import Grid from './src/Grid/Grid.jsx'

import unitTest from './unit-test-entry.js'

// TODO: Remove this from bundling for live version.
unitTest()

ReactDOM.render(
  <Provider store={createStore(combineReducers({grid}))}>
    <Grid />
  </Provider>,
  document.getElementById('react-container')
)
