import React from 'react'
import { Link } from 'react-router-dom'

class BirdCircle extends React.Component {
  id = this.props.id
  name = this.props.name
  image = this.props.image
  render () {
    return (
      <React.Fragment>
        <div className='wrapperBirds'>
          <div className='birdContainer'>
            <Link to={`/profile/${this.id}`}>
              <div className="circleImage"><img className={ this.props.found ? "circleImageFound" : "circleImage"} src={ this.image }></img></div>
            </Link>
            <div className='circleTitle'>{ this.name }</div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BirdCircle


//

// If found state = true show class circleImageFound otherwise circleImage

