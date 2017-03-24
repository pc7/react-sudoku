// @flow

import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import grid from './store/reducers/grid.js'

import App from './src/App/App.jsx'

import unitTest from './unit-test-entry.js'

// TODO: Remove this from bundling for live version.
unitTest()

ReactDOM.render(
  <Provider store={createStore(combineReducers({grid}))}>
    <App />
  </Provider>,
  document.getElementById('react-container')
)
