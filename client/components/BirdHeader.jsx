import React from 'react'

import { Grommet, Box, Anchor } from 'grommet'

const myTheme = {
  global: {
    font: {
      family: 'Omnes-pro'
    }
  }
}

const BirdHeader = () => (
  <Grommet theme = {myTheme}>
    <h1>
      <link rel="stylesheet" href="https://use.typekit.net/abr7ohz.css" />
      <Box align="center" background="#F3A712" pad="small">
        <Box direction="row" gap="medium" >
          <Anchor color="#FFFFFF">POKAI-MANU</Anchor>
        </Box>
      </Box>
    </h1>
  </Grommet>
)

export default BirdHeader
