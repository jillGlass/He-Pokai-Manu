import React from 'react'
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
    <BackBtn/>
    </>
  )
}

export default BirdInfo
