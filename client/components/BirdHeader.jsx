import React from 'react'
import { Menu, Container } from 'semantic-ui-react'

class BirdHeader extends React.Component {
  render () {
    return (

      <Menu className='centerHeader' borderless fixed='top' inverted style = {{ backgroundColor: '#F3A712' }}>
        <Container>
          <Menu.Item>
            He Pokai Manu
          </Menu.Item>
        </Container>
      </Menu>

    )
  }
}

export default BirdHeader
