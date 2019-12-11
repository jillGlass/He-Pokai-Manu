import React from 'react'
import { Menu, Container } from 'semantic-ui-react'
import InstructionsBtn from './InstructionsBtn'
import { Link, HashRouter as Router } from 'react-router-dom'
import BirdProfile from './BirdProfile'

class MainFooter extends React.Component {
toggleMessage = () => {
  if (this.props.found === 1) {
    return 'You have found 1 bird!'
  } else if (this.props.found === 20) {
    return 'You have found all of the birds!'
  } else return `You have found ${this.props.found} birds!`
}

render () {
  return (
    <Menu fixed='bottom' inverted style = {{ backgroundColor: '#F3A712' }}>
      <Container className="footer" >
        <Menu.Item className ='footerText borderless'>
          {this.toggleMessage()}
        </Menu.Item>
        <Menu.Item className ='iconButton borderless' position='right'>
          <Router>
            <Link to='/instructions'>
              <InstructionsBtn />
            </Link>
          </Router>
        </Menu.Item>
      </Container>
    </Menu>
  )
}
}

export default MainFooter
