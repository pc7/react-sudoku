
import React from 'react'

const App: Function = React.createClass({

  componentWillMount() {
    store.dispatch({type: 'INITIALISE_GRID'})
    console.log('App component grid initialised')
  },

  render() {
    return (<p>App content</p>)
  }
})

export default App
