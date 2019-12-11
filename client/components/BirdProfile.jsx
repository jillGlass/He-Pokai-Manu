import React from 'react'
import BirdHeader from './BirdHeader'
import BirdInfoBtn from './BirdInfoBtn'
import BackBtn from './BackBtn'
import BirdProfileTitle from './BirdProfileTitle'
import { Link } from 'react-router-dom'
import { Segment, Grid, Button } from 'semantic-ui-react'
import fetch from '../api/birds'
import found from '../api/found'
import ScrollToTop from './ScrollToTop'

class BirdProfile extends React.Component {
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

  handleClick = (id) => {
    found(id)
  }

  toggleLink = (bird) => bird.found ? `/profile/${bird.bird_id}` : '/'

  toggleColor = (bird) => bird.found ? ' pokaiBtnStyleFound' : 'pokaiBtnStyle'

  togglePokai = (bird) => bird.found ? 'Achieved!' : 'Pokai'

  render () {
    const { id } = this.props.match.params
    const bird = this.state.birds.find(bird => bird.bird_id === Number(id))
    return this.state.birds.length === 0 ? null : <React.Fragment>
      <ScrollToTop />
      <Segment vertical >
        <Grid container stackable className='birdProfileWrapper' >
          <Grid.Column>
            <Grid.Row>
              <BirdHeader />
              <div>
                <img src={bird.image} alt={bird.name} width="412px" height="auto"/>
              </div>
              <BirdProfileTitle name={bird.name}/>
              <Link to={this.toggleLink(bird)}>
                <Button onClick= {() => this.handleClick(id)} style = {{ marginBottom: '10px' }} size='big' className={this.toggleColor(bird)}>{this.togglePokai(bird)}</Button>
              </Link>
              <Link to={`/profile/${id}/info`}>
                <BirdInfoBtn />
              </Link>
              <Link to="/">
                <BackBtn />
              </Link>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </Segment>
    </React.Fragment>
  }
}
export default BirdProfile
