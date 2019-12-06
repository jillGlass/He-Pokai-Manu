import React from 'react'

class BirdCircle extends React.Component {
  name = this.props.name
  image = this.props.image
  render () {
    return (
      <React.Fragment>
        <div className='wrapperBirds'>
          <div className='birdContainer'>
            <div className="circleImage"><img className="circleImage" src={ this.image }></img></div>
            <div className='circleTitle'>{ this.name }</div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BirdCircle
