import React from 'react'

// import {getBird} from '

class BirdProfileTitle extends React.Component {
  render () {
    const bird = this.props.birds.find(bird => bird.bird_id === this.props.id)
    return (
      <React.Fragment>

        <div className='birdProfileTitle'>{bird.name}</div>

      </React.Fragment>
    )
  }
}

export default BirdProfileTitle
