import React from 'react'
import BirdHeader from './BirdHeader'
// import FoundBtn from './FoundBtn'
import BirdInfoBtn from './BirdInfoBtn'
import BackBtn from './BackBtn'
import BirdProfileTitle from './BirdProfileTitle'
import { Link } from 'react-router-dom'
import { Segment, Grid, Button } from 'semantic-ui-react'
import found from '../api/found'
import fetch from '../api/birds'

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

  render () {
    const { id } = this.props.match.params
    const bird = this.state.birds.find(bird => bird.bird_id === Number(id))
    if (this.state.birds.length !== 0) {
      return <React.Fragment>

        <Segment vertical >
          <Grid container stackable className='birdProfileWrapper' >
            <Grid.Row>
              <BirdHeader />
              <div>
                <img src={bird.image} alt={bird.name} width="412px" height="auto"/>
              </div>
              <BirdProfileTitle name={bird.name}/>
              <Link to={this.toggleLink(bird)}>
                <Button onClick= {() => this.handleClick(id)} style = {{ marginBottom: '10px' }} size='massive' className={this.toggleColor(bird)}>POKAI!</Button>
              </Link>
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
    }
    return null
  }
}

export default BirdProfile

// style={{ padding: '5px 5px' }}
// verticalAlign='middle'
