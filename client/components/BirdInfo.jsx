import React from 'react'
import { Link, HashRouter as Router } from 'react-router-dom'
import BirdHeader from './BirdHeader'
import BackBtn from './BackBtn'
import BirdInfoText from './BirdInfoText'

class BirdInfo extends React.Component {
  render () {
    return (
      <React.Fragment>
        <BirdHeader />
        <BirdInfoText birds={this.props.birds} {...props}/>
        {/* <Link to={`/profile/${props.match.params.id}`}>
          <BackBtn/>
        </Link> */}
      </React.Fragment>
    )
  }
}

export default BirdInfo
