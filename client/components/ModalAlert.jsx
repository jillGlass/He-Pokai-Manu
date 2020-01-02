import React, { Component, Fragment } from 'react'
import { Popup } from 'semantic-ui-react'

class PopupAlert extends React.Component {
  state = {}
  contextRef = createRef()

  toggle = () => this.setState((prevState) => ({ open: !prevState.open }))

  render () {
    console.log('running popup')
    return (
      <Fragment>
        <Button content='Open controlled Popup' onClick={this.toggle} />
        <Popup
          context={this.contextRef}
          content='Congrats'
          position='top center'
          open={this.state.open}
        />
        ---------->
        <strong ref={this.contextRef}>here</strong>
      </Fragment>
    )
  }
}

export default PopupAlert
