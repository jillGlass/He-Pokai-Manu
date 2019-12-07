import React from 'react'
import { mount } from 'enzyme'
import BirdInfo from '../../../client/components/BirdInfo'
import BirdHeader from '../../../client/components/BirdHeader'
import BackBtn from '../../../client/components/BackBtn'
import { Card } from 'semantic-ui-react'

const mockBirdInfoProps = {
  name: 'Tui',
  info: 'Tui are unique to New Zealand and belong to the honey-eater family which means that they feed mainly on nectar from the flowers of native plants. They can be quite aggressive! They will chase other Tui away from food and tasty nectar. Tui are found throughout the North, South and Stewart Islands of New Zealand.'
}

describe('BirdInfo component test', () => {
  it('BirdInfo contains header, info card, and button components', () => {
    // Arrange
    const params = { params: { id: 1 } }
    const { name, info } = mockBirdInfoProps
    const expected = [<BirdHeader/>, <Card/>, <BackBtn/>]
    // Act
    const wrapper = mount(<BirdInfo match={params}/>)
    wrapper.setProps({ name: name, info: info })
    const actual = wrapper.containsAllMatchingElements(expected)
    // Assert
    expect(actual).toBeTruthy()
  })
  it('BirdInfo Card element has expected props', () => {
    // Arrange
    const params = { params: { id: 1 } }
    const { name, info } = mockBirdInfoProps
    const expected = { info: 'info', name: 'name' }
    // Act
    const wrapper = mount(<BirdInfo match={params}/>)
    const actual = wrapper.setProps({ name: name, info: info })
    const actualInfo = wrapper.text()

    // Assert
    expect(actual).hasOwnProperty(expected.name)
    expect(actual).hasOwnProperty(expected.info)
    expect(actualInfo).toContain(info)
  })
})
