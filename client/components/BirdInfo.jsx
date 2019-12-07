import React from 'react'
import { Link } from 'react-router-dom'
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
    <Link to={`/${props.match.params.id}`}>
      <BackBtn/>
    </Link>
    </>
  )
}

export default BirdInfo
