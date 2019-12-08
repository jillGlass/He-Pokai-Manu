import React from 'react'

class BirdInfoText extends React.Component {
  render () {
    const { id } = this.props.match.params
    const bird = this.props.birds.find(bird => bird.bird_id === Number(id))

    return (
      <React.Fragment>

        <div className='birdInfoTextName'>{bird.name}</div>
        <div className='birdInfoTextInfo'>{bird.info}</div>

      </React.Fragment>
    )
  }
}

export default BirdInfoText
