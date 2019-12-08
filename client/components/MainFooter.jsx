import React from 'react'
import { Menu, Container } from 'semantic-ui-react'
import InstructionsBtn from './InstructionsBtn'
import { Link, HashRouter as Router } from 'react-router-dom'
import ConsoleLog from './ConsoleLog'

class MainFooter extends React.Component {
  state = {
    count: 0
  }
  updateCount () {
    this.setState({ count: this.state.count + 1 })
  }

  render () {
    // this.props.birds.map(bird => {
    //   if (bird.found === true) {
    //     console.log('map function', this.state.count)
    //     this.updateCount()
    //   }
    // }
    // )
    const count = this.state.count
    const message = `You have found ${count} birds!`
    return (
      <Menu fixed='bottom' inverted style = {{ backgroundColor: '#F3A712' }}>
        <Container className="footer" >
          <Menu.Item >{message}
            <br></br>
            Can you find them all?
          </Menu.Item>
          <Router>
            <Link to='/instructions'>
              <InstructionsBtn />
              <ConsoleLog>{this.props}</ConsoleLog>
            </Link>
          </Router>
        </Container>
      </Menu>
    )
  }
}

export default MainFooter
