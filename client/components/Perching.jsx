import React from 'react'
import BirdHeader from './BirdHeader'
import BirdGrid from './BirdGrid'
import MainFooter from './MainFooter'

class Perching extends React.Component {
  render () {
    console.log(this.props)
    return (
      <>
      <BirdHeader />
      <BirdGrid birds={this.props.birds}/>
      <MainFooter />
      </>
    )
  }
}

export default Perching
