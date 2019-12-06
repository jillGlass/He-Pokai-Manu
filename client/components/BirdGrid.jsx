import React from 'react'
import { Grid } from 'semantic-ui-react'
// import Circle from './Circle'
import BirdContainer from './BirdContainer'

class BirdGrid extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Grid className='gridWrap' columns={2} doubling>
          <BirdContainer />
          <BirdContainer />
          <BirdContainer />
          <BirdContainer />
          <BirdContainer />
          <BirdContainer />
          <BirdContainer />
          <BirdContainer />
          <BirdContainer />
          <BirdContainer />

        </Grid>

      </React.Fragment>
    )
  }
}

export default BirdGrid
