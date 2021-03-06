import React from 'react'
import BirdHeader from './BirdHeader'
import BirdGrid from './BirdGrid'
import MainFooter from './MainFooter'
import fetch from '../api/birds'
import ScrollToTop from './ScrollToTop'

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
      .catch(err => err.message)
  }

  counter = (birds) => birds.reduce((found, bird) => {
    if (bird.found) {
      found++
    } return found
  }, 0)

  render () {
    return (
      <>
      <ScrollToTop />
      <BirdHeader />
      <BirdGrid birds={this.state.birds}/>
      <MainFooter birds={this.state.birds} found={this.state.found}/>
      </>
    )
  }
}

export default Perching
