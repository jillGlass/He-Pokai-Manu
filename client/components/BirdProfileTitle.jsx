import React from 'react'

// import {getBird} from '

class BirdProfileTitle extends React.Component {
  render () {
    return (
      <React.Fragment>

        <div className='birdProfileTitle'>{this.props.birds.name}</div>

      </React.Fragment>
    )
  }
}

export default BirdProfileTitle
