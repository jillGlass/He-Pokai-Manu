import React from 'react'

// import {getBird} from '

class BirdProfileTitle extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      errorMessage: '',
      name: []
    }
    this.getTitle = this.getTitle.bind(this)
  }

  componentDidMount () {
    const id = this.props.match.params.id
    if (id) {
      this.getBird(id)
    }
  }

  getTitle (id) {
    getBird(id)
      .then(name => this.setState({ name: name }))
      .catch(err => this.setState({ errorMessage: err.message }))
  }

  render () {

    return (
      <React.Fragment>

        <div className='birdProfileTitle'>{this.state.name}</div>

      </React.Fragment>
    )
  }
}

export default BirdProfileTitle
