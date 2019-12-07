import React from 'react'
import BirdHeader from './BirdHeader'
import FoundBtn from './FoundBtn'
import BirdInfoBtn from './BirdInfoBtn'
import BackBtn from './BackBtn'
import BirdProfileTitle from './BirdProfileTitle'
import { Link } from 'react-router-dom'

class BirdProfile extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className='birdProfileContainer ui stackable four column grid' >
          <BirdHeader />
          <div className='birdProfileImage'><img src='images/tui.png'/></div>
          <BirdProfileTitle />
          <FoundBtn />
          <Link to={`/${this.props.match.params.id}/info`}>
            <BirdInfoBtn />
          </Link>
          <Link to="/">
            <BackBtn />
          </Link>
        </div>
      </React.Fragment>
    )
  }
}

export default BirdProfile
