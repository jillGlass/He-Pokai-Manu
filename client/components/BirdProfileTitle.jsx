import React from 'react'

class BirdProfileTitle extends React.Component {
  render () {
    const { name } = this.props
    return (
      <React.Fragment>

        <div className='birdProfileTitle'>{name}</div>

      </React.Fragment>
    )
  }
}

export default BirdProfileTitle
