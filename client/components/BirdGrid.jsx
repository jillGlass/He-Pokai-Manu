import React from 'react'
import { Grid } from 'semantic-ui-react'
// import Circle from './Circle'
import BirdCircle from './BirdCircle'

class BirdGrid extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Grid className='gridWrap' columns={2} doubling>
          <BirdCircle />
          <BirdCircle />
          <BirdCircle />
          <BirdCircle />
          <BirdCircle />
          <BirdCircle />
          <BirdCircle />
          <BirdCircle />
          <BirdCircle />
          <BirdCircle />

        </Grid>

      </React.Fragment>
    )
  }
}

export default BirdGrid
