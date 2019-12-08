import React from 'react'
import ConsoleLog from './ConsoleLog'

class BirdInfoText extends React.Component {
  render () {
    const { id } = this.props.match.params
    const bird = this.props.birds.find(bird => bird.bird_id === Number(id))

    return (
      <React.Fragment>
        <div className='birdInfoTextWrapper'>
          <div className='birdInfoTextName'>{bird.name}</div>
          <div className='birdInfoTextInfo'>{bird.info}</div>
        </div>
      </React.Fragment>
    )
  }
}

export default BirdInfoText
