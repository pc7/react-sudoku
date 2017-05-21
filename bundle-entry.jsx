// @flow

import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import grid from './store/reducers/grid.js'
import gameWon from './store/reducers/gameWon.js'

import App from './src/App/App.jsx'

ReactDOM.render(
  <Provider store={createStore(combineReducers({grid, gameWon}))}>
    <App />
  </Provider>,
  document.getElementById('react-container')
)
