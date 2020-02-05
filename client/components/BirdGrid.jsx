import React from 'react'
import { Grid } from 'semantic-ui-react'
import BirdCircle from './BirdCircle'

class BirdGrid extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className='gridWrapUpper' >
          <Grid className='gridWrap' columns={2} doubling>
            {this.props.birds.map(bird =>
              <BirdCircle key={bird.name} {...bird} />
            )
            }
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

export default BirdGrid
