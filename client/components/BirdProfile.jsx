import React from 'react'
import BirdHeader from './BirdHeader'
import FoundBtn from './FoundBtn'
import BirdInfoBtn from './BirdInfoBtn'
import BackBtn from './BackBtn'
import BirdProfileTitle from './BirdProfileTitle'
import { Segment, Grid } from 'semantic-ui-react'

class BirdProfile extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Segment style={{ padding: '5px 5px' }} vertical>
          <Grid container stackable verticalAlign='center'>
            <Grid.Row>
              <BirdHeader />
              <div className='birdProfileImage'><img src='images/tui.png'/></div>
              <BirdProfileTitle />
              <FoundBtn />
              <BirdInfoBtn />
              <BackBtn />
            </Grid.Row>
          </Grid>

        </Segment>
      </React.Fragment>
    )
  }
}

export default BirdProfile


