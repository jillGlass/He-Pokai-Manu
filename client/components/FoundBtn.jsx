import React from 'react'
import { Button } from 'semantic-ui-react'
import found from '../api/found'

const FoundBtn = () => <Button onClick= {() => found(this.props.id)} style = {{ marginBottom: '10px' }} size='massive' className='foundBtnStyle' >POKAI!</Button>

export default FoundBtn
