import React from 'react'
import BirdHeader from './BirdHeader'
import FoundBtn from './FoundBtn'
import BirdInfoBtn from './BirdInfoBtn'
import BackBtn from './BackBtn'
import BirdProfileTitle from './BirdProfileTitle'
import { Link } from 'react-router-dom'
import { Segment, Grid } from 'semantic-ui-react'

class BirdProfile extends React.Component {
  render () {
    return (
      <React.Fragment>

        <Segment style={{ padding: '5px 5px' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <BirdHeader />
              <div className='birdProfileImage'>{this.props.birds.image}</div>
              <BirdProfileTitle birds={this.props.birds} id={this.props.match.params.id}/>
              <FoundBtn />
              <Link to={`/profile/${this.props.match.params.id}/info`}>
                <BirdInfoBtn />
              </Link>
              <Link to="/">
                <BackBtn />
              </Link>
            </Grid.Row>
          </Grid>

        </Segment>

      </React.Fragment>
    )
  }
}

export default BirdProfile
