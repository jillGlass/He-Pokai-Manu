import React from 'react'
import { Grid, Card, Icon, Image } from 'semantic-ui-react'
import Circle from './Circle'

class BirdGrid extends React.Component {
  render () {
    return (
    <>
    <div className="grid">
      <Grid className="ui two cloumn grid">
        <Circle/>
        <Circle/>
        <Circle/>
        <Circle/>
        <Circle/>
        <Circle/>
        <Circle/>
        <Circle/>
        <Circle/>
        <Circle/>
        <Circle/>
        <Circle/>
      </Grid>
    </div>
    </>
    )
  }
}

export default BirdGrid
