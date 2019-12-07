import React from 'react'
import { Grid } from 'semantic-ui-react'
// import Circle from './Circle'
import BirdCircle from './BirdCircle'
import fetch from '../api/birds'

class BirdGrid extends React.Component {
  state = {
    birds: []
  }

  componentDidMount () {
    fetch()
      .then(birds => {
        this.setState({
          birds
        })
      })
  }
  
  render () {
    console.log(this.state.birds[0])
    return (
      <React.Fragment>

        <Grid className='gridWrap' columns={2} doubling>
          {this.state.birds.map(bird => <BirdCircle key={bird.name} name={bird.name} image={bird.image} found={bird.found}/>)}
        </Grid>

      </React.Fragment>
    )
  }
}

export default BirdGrid
