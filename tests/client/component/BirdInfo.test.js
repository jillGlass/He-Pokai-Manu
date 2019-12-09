import React from 'react'
import { mount } from 'enzyme'
import BirdInfo from '../../../client/components/BirdInfo'
import BirdHeader from '../../../client/components/BirdHeader'
import BackBtn from '../../../client/components/BackBtn'
import { HashRouter as Router } from 'react-router-dom'

const mockBirdsArray = [{
  bird_id: 1,
  found: 1,
  image: '/images/tui.jpg',
  info: 'Tui are unique to New Zealand and belong to the honey-eater family which means that they feed mainly on nectar from the flowers of native plants. They can be quite aggressive! They will chase other Tui away from food and tasty nectar. Tui are found throughout the North, South and Stewart Islands of New Zealand.',
  name: 'Tui'
}]

describe('BirdInfo component test', () => {
  it('BirdInfo contains header, info card, and button components', () => {
    // Arrange
    const params = { params: { id: 1 } }
    const expected = [<BirdHeader/>, <BackBtn/>]
    // Act
    const wrapper = mount(<Router><BirdInfo match={params} birds={mockBirdsArray}/></Router>)
    const actual = wrapper.containsAllMatchingElements(expected)
    // Assert
    expect(actual).toBeTruthy()
  })
  it('BirdInfo Card element has expected props', () => {
    // Arrange
    const params = { params: { id: 1 } }
    const { name, info } = mockBirdsArray[0]

    // Act
    const wrapper = mount(<Router><BirdInfo match={params} birds={mockBirdsArray}/></Router>)
    const actual = wrapper.setProps({ name: name, info: info })
    const actualInfo = wrapper.text()

    // Assert
    expect(actual).hasOwnProperty('name')
    expect(actual).hasOwnProperty('info')
    expect(actualInfo).toContain(info)
  })
})
