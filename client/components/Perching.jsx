import React from 'react'
import BirdHeader from './BirdHeader'
import BirdGrid from './BirdGrid'
import MainFooter from './MainFooter'
import fetch from '../api/birds'

class Perching extends React.Component {
  state = {
    found: 0
  }

  componentDidMount () {
    fetch()
      .then(birds => {
        this.setState({
          found: this.counter(birds)
        })
      })
  }

  counter = (birds) => birds.reduce((found, bird) => {
    if (bird.found) {
      found++
    } return found
  }, 0)

  render () {
    return (
      <>
      <BirdHeader />
      <BirdGrid birds={this.props.birds} found={this.state.found}/>
      <MainFooter birds={this.props.birds} found={this.state.found}/>

   


      </>
    )
  }
}

export default Perching
