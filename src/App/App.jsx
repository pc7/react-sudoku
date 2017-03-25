// @flow

import React from 'react'
import Controls from '../Controls/Controls.jsx'
import Grid from '../Grid/Grid.jsx'

const App : Function = React.createClass({

  getInitialState: () => ({hiddenCells: 40}),

  render() {

    return (
      <main>
        <Controls hiddenCells={this.state.hiddenCells}
                  setHiddenCells={(c: number) => this.setState({hiddenCells: c})}
                  />
        <Grid hiddenCells={this.state.hiddenCells} />
      </main>
    )
  }
})

export default App
