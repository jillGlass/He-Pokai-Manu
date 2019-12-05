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
        gap='small'
        // align="center"
        alignContent='center'
        // alignSelf='center'

        areas={[
          { name: 'main', start: [1, 1], end: [1, 1] }
        ]}
      >
        <Circle gridArea="main"/>
        <Circle gridArea="main"/>
        <Circle gridArea="main"/>
        <Circle gridArea="main"/>
        <Circle gridArea="main"/>
        <Circle gridArea="main"/>
      </Grid>

    </Grommet>

  )
}

export default BirdGrid
