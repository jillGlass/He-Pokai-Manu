import React from 'react'
import { Menu, Container } from 'semantic-ui-react'

class MainFooter extends React.Component {
  state = {
  }

  render () {
    return (

      <Menu fixed='bottom' inverted style = {{ backgroundColor: '#F3A712' }}>
        <Container className="footer" >
          <Menu.Item >

            You have found 6 birds!
            <br></br>
            Can you find them all?
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}

export default MainFooter
