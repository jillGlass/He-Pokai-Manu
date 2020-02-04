import React from 'react'
import { Menu, Container } from 'semantic-ui-react'

class BirdHeader extends React.Component {
  render () {
    return (

      <Menu className='centerHeader' borderless fixed='top' inverted style = {{ backgroundColor: '#F3A712', height: '4.5rem' }}>
        <Menu.Item style={{fontSize: '2rem'}}>
            He Pokai Manu
        </Menu.Item>
      </Menu>
    )
  }
}

export default BirdHeader
