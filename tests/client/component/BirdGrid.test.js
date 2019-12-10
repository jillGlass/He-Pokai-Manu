import React from 'react'
import { mount } from 'enzyme'
import BirdGrid from '../../../client/components/BirdGrid'
import BirdCircle from '../../../client/components/BirdCircle'
import { HashRouter as Router } from 'react-router-dom'

describe('BirdGrid and BirdCircle Component Tests:', () => {
  // Arrange
  const birds = [{ bird_id: 9, name: 'California Quail', info: 'Quail like to eat seeds...', image: 'public/images/californiaquail.jpg/', found: false }, { bird_id: 10, name: 'Thrush', info: 'Thrush like to usually eat from the ground...', image: 'public/images/thrush.jpg/', found: false }]
  const array = birds.length

  it('The BirdGrid component passes the appropriate info to the BirdCircle component', () => {
    // Act
    const wrapper = mount(<Router><BirdGrid birds={birds}/></Router>)
    console.log(wrapper.html())
    // Assert
    expect(wrapper.find(BirdCircle)).toHaveLength(array)
  })
})
