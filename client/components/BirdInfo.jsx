import React from 'react'
import { Link, HashRouter as Router } from 'react-router-dom'
import BirdHeader from './BirdHeader'
import BackBtn from './BackBtn'
import BirdInfoText from './BirdInfoText'

class BirdInfo extends React.Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      <React.Fragment>
        <div className='birdInfoWrapper' >
          <BirdHeader />
          <BirdInfoText birds={this.props.birds} {...this.props}/>
          <Link to={`/profile/${this.props.match.params.id}`}>
            <BackBtn className='backBtnStyle'/>
          </Link>
        </div>
      </React.Fragment>
    )
  }
}

export default BirdInfo
