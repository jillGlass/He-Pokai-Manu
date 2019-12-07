import React from 'react'
import BirdHeader from './BirdHeader'
import FoundBtn from './FoundBtn'
import BirdInfoBtn from './BirdInfoBtn'
import BackBtn from './BackBtn'
import BirdProfileTitle from './BirdProfileTitle'
import { Link, HashRouter as Router } from 'react-router-dom'
import { Segment, Grid } from 'semantic-ui-react'

class BirdProfile extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Router>
          <Segment style={{ padding: '5px 5px' }} vertical>
            <Grid container stackable verticalAlign='middle'>
              <Grid.Row>
                <BirdHeader />
                <div className='birdProfileImage'><img src='images/tui.png'/></div>
                <BirdProfileTitle />
                <FoundBtn />
                <Link to={`/profile/${this.props}/info`}>
                  <BirdInfoBtn />
                </Link>
                <Link to="/">
                  <BackBtn />
                </Link>
              </Grid.Row>
            </Grid>

          </Segment>

        </Router>
      </React.Fragment>
    )
  }
}

export default BirdProfile
