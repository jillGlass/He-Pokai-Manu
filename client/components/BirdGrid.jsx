import React from 'react'
import { Grommet, Grid } from 'grommet'
import Circle from './Circle'
// import { BirdHeader } from './BirdHeader'

const BirdGrid = () => {
  return (
    <Grommet
      // alignContent='center'
    >
      <Grid
        rows={['fit', 'fit', 'fit']}
        columns={['fit', 'fit']}
        gap='large'
        // align="center"
        justify='center'
        alignContent='center'
        // alignSelf='center'
        // grid-template-columns={'auto-fill', 'minmax(200px, 1fr'}

        areas={[
          { name: 'main', start: [1, 1], end: [1, 1] }
        ]}
      >
        <Circle gridArea="main"><h2>Tui</h2></Circle>
        <Circle gridArea="main"><h2>Tui</h2></Circle>
        <Circle gridArea="main"><h2>Tui</h2></Circle>
        <Circle gridArea="main"><h2>Tui</h2></Circle>
        <Circle gridArea="main"><h2>Tui</h2></Circle>
        <Circle gridArea="main"><h2>Tui</h2></Circle>
        <Circle gridArea="main"><h2>Tui</h2></Circle>
        <Circle gridArea="main"><h2>Tui</h2></Circle>
        <Circle gridArea="main"><h2>Tui</h2></Circle>
        
      </Grid>

    </Grommet>

  )
}

export default BirdGrid
