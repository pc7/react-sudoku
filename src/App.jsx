
import React from 'react'

const App: Function = React.createClass({

  componentWillMount() {
    console.log('App component')
  },

  render() {
    return (<p>App content</p>)
  }
})

export default App
