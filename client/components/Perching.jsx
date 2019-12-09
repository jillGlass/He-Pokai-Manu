import React from 'react'
import BirdHeader from './BirdHeader'
import BirdGrid from './BirdGrid'
import MainFooter from './MainFooter'
import fetch from '../api/birds'

class Perching extends React.Component {
  state = {
    found: 0,
    birds: []
  }

  componentDidMount () {
    fetch()
      .then(birds => {
        this.setState({
          found: this.counter(birds),
          birds
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
      <BirdGrid birds={this.state.birds}/>
      <MainFooter birds={this.state.birds} found={this.state.found}/>
      </>
    )
  }
}

export default Perching
