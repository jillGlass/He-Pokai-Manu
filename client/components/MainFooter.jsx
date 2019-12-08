import React from 'react'
import { Menu, Container } from 'semantic-ui-react'
import InstructionsBtn from './InstructionsBtn'
import { Link, HashRouter as Router } from 'react-router-dom'
import ConsoleLog from './ConsoleLog'

class MainFooter extends React.Component {
  
  render () {
    const number = this.props.found
    const message = `You have found ${number} birds!`
    return (
      <Menu fixed='bottom' inverted style = {{ backgroundColor: '#F3A712' }}>
        <Container className="footer" >
          <Menu.Item >
            {message}
            <br></br>
            Can you find them all?
          </Menu.Item>
          <Router>
            <Link to='/instructions'>
              <InstructionsBtn />
              <ConsoleLog>Props:{this.props.birds}</ConsoleLog>
              <ConsoleLog>Found:{this.props.found}</ConsoleLog>
            </Link>
          </Router>
        </Container>
      </Menu>
    )
  }
}

export default MainFooter
