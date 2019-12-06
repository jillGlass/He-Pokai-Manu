import React from 'react'

class BirdCircle extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className='wrapperBirds'>
          <div className='birdContainer'>
            <div className="circleImage"><img className="circleImage" src='images/tui.png'></img></div>
            <div className='circleTitle'>Tui</div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BirdCircle
