import React from 'react'
import { Grommet, Grid } from 'grommet'
// import BackButton from './BackButton'

export const Instructions = () => (
  <Grommet plain>
    <Grid
      rows={['xsmall', 'xsmall', 'xsmall', 'xsmall']}
      columns={[]}>
      <h1>Instructions</h1>
      <p>
      Pokai-Manu is a treasure-hunt game for birds in New Zealand. We aim to help younger Kiwi’s learn more about our bird life in an exciting way, while getting them outside and in to nature.
      </p>
      <p>
      To play, get outside and get bird spotting! Each time you spot a bird that is listed, go into the bird profile and push ‘FOUND’. Your found bird will then be added to your Inventory of birds.
      </p>
      <p>
      How many can you find?
      </p>
      {/* <BackButton/> */}
    </Grid>
  </Grommet>
)
