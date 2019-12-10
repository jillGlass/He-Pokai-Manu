import React from 'react'

class BirdInfoText extends React.Component {
  toggleColor (bird) {
    console.log(bird.category)
    if (bird.category === 'notThreatened') {
      return 'notThreatened'
    } else if (bird.category === 'atRisk') {
      return 'atRisk'
    } else return 'threatened'
  }

  render () {
    const { id } = this.props.match.params
    const bird = this.props.birds.find(bird => bird.bird_id === Number(id))

    return (
      <React.Fragment>
        <div className='birdInfoTextWrapper'>
          <div className='birdInfoTextName'>{bird.name}</div>
          <div className='birdInfoTextInfo'>{bird.info}</div>
          <br></br>
          <div className='birdInfoTextInfo'>Conservation Status:</div>
          <div className={this.toggleColor(bird)}>{bird.status}</div>
        </div>
      </React.Fragment>
    )
  }
}

export default BirdInfoText
