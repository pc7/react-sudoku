// @flow

import React from 'react'
import Controls from '../Controls/Controls.jsx'
import Grid from '../Grid/Grid.jsx'

import styles from './App.css'
import reset from './reset.css'

const App : Function = React.createClass({

  // ARCHITECTURE: Application can potentially support other dimensions, eg 3x2,
  //               the validCellValues array and cellValue type would need to
  //               be updated accordingly.
  smallSqWidth: 3,
  smallSqHeight: 3,

  getInitialState: () => ({hiddenCells: 60}),

  render() {

    return (
      <main>
        <Controls hiddenCells={this.state.hiddenCells}
                  setHiddenCells={(c: number) => this.setState({hiddenCells: c})}
                  smallSqWidth={this.smallSqWidth}
                  smallSqHeight={this.smallSqHeight}
                  />
        <Grid hiddenCells={this.state.hiddenCells}
              smallSqWidth={this.smallSqWidth}
              smallSqHeight={this.smallSqHeight}
              />
      </main>
    )
  }
})

export default App
