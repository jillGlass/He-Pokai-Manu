import React from 'react'
import { Grommet } from 'grommet'
import BirdHeader from './BirdHeader'

const myTheme = {
  global: {
    font: {
      family: 'Omnes-pro'
    }
  }
}

const Perching = () => (
  <Grommet theme = {myTheme}>
    <BirdHeader />
    {/* <BirdGrid />
    <MainFooter /> */}

  </Grommet>
)

export default Perching
