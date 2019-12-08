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
    const { id } = this.props.match.params
    const bird = this.props.birds.find(bird => bird.bird_id === Number(id))
    return (
      <React.Fragment>

        <Segment style={{ padding: '5px 5px' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <BirdHeader />
              <div>
                <img src={bird.image} alt={bird.name} width="355px" height="auto"/>
              </div>
              <BirdProfileTitle name={bird.name}/>
              <FoundBtn />
              <Link to={`/profile/${id}/info`}>
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
