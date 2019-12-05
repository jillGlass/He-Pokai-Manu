import React from 'react'
import { Grid } from 'semantic-ui-react'
import Circle from './Circle'

class BirdGrid extends React.Component {
  render () {
    return (
    <>
      <Grid centered doubling columns={5}>
        <Circle><h2>Tui</h2></Circle>
        <Circle><h2>Tui</h2></Circle>
        <Circle><h2>Tui</h2></Circle>
        <Circle><h2>Tui</h2></Circle>
        <Circle><h2>Tui</h2></Circle>
        <Circle><h2>Tui</h2></Circle>
        <Circle><h2>Tui</h2></Circle>
        <Circle><h2>Tui</h2></Circle>
        <Circle><h2>Tui</h2></Circle>
        <Circle><h2>Tui</h2></Circle>
        <Circle><h2>Tui</h2></Circle>
        <Circle><h2>Tui</h2></Circle>
      </Grid>
    </>
    )
  }
}

export default BirdGrid
