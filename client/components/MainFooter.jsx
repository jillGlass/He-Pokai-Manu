import React from 'react'
import { Menu, Container } from 'semantic-ui-react'
import InstructionsBtn from './InstructionsBtn'
import { Link, HashRouter as Router } from 'react-router-dom'
import ConsoleLog from './ConsoleLog'

class MainFooter extends React.Component {
  state = {
    count: 0
  }
  updateCount = () => {
    const currentCount = this.state.count

    this.setState({
      count: currentCount + 1
    })
  }

  countFound = () => this.props.birds.map(bird => {
    if (bird.found === 1) {
      this.updateCount()
    }
  }
  )
  componentDidMount() {
    this.countFound()
  }

  render () {
    const number = this.state.count
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
              {/* <ConsoleLog>{this.props.birds.found}</ConsoleLog> */}
            </Link>
          </Router>
        </Container>
      </Menu>
    )
  }
}

export default MainFooter
