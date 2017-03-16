
import React from 'react'
import {connect} from 'react-redux'

import actionTypes from '../store/action-types.js'

const App: Function = React.createClass({

  componentWillMount() {
    this.props.initialiseGrid()
    console.log('App component grid initialised')
  },

  render() {
    return (<p>App content</p>)
  }
})

const mapStateToProps = (storeState: Object): Object => ({})

const mapDispatchToProps = (dispatch: Function): Object => ({
  initialiseGrid: () => dispatch({type: actionTypes.INITIALISE_GRID})
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
