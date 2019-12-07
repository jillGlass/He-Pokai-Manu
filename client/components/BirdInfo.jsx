import React from 'react'
import { Link, HashRouter as Router } from 'react-router-dom'
import { Card } from 'semantic-ui-react'
import BirdHeader from './BirdHeader'
import BackBtn from './BackBtn'

const BirdInfo = (props) => {
  const { name, info } = props
  return (
    <>
    <BirdHeader/>
    <Card
      header={`${name}`}
      description={`${info}`}
    />
    <Router>
      <Link to={`/profile/${props.match.params.id}`}>
        <BackBtn/>
      </Link>
    </Router>
    </>
  )
}

export default BirdInfo
