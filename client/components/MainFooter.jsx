import React from 'react'
import { Menu, Container } from 'semantic-ui-react'
import InstructionsBtn from './InstructionsBtn'
import { Link, HashRouter as Router } from 'react-router-dom'

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
          <Router>
            <Link to='/instructions'>
              <InstructionsBtn />
            </Link>
          </Router>
        </Container>
      </Menu>
    )
  }
}

export default MainFooter
