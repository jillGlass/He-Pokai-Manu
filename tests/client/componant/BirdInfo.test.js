import React from 'react'
import { mount } from 'enzyme'
import BirdInfo from '../../../client/components/BirdInfo'
// import BirdHeader from '../../../client/components/BirdHeader'
// import BackBtn from '../../../client/components/BackBtn'
// import Card from 'semantic-ui-react'

describe('<BirdHeader /> component test', () => {
  it('renders headers', () => {
    // Arrange
    expect.assertions(1)
    const expected = { name: 'Tui', info: 'Tui are unique to New Zealand and belong to the honey-eater family which means that they feed mainly on nectar from the flowers of native plants. They can be quite aggressive! They will chase other Tui away from food and tasty nectar. Tui are found throughout the North, South and Stewart Islands of New Zealand.' }

    // Act
    const wrapper = mount(<BirdInfo name='Tui' info='Tui are unique to New Zealand and belong to the honey-eater family which means that they feed mainly on nectar from the flowers of native plants. They can be quite aggressive! They will chase other Tui away from food and tasty nectar. Tui are found throughout the North, South and Stewart Islands of New Zealand.'/>)
    const actual = wrapper
    // Assert
    // expect(actual).containsMatchingElement(<BirdHeader/>)
    // expect(actual).containsAllMatchingElements([<BirdHeader/>, <Card/>, <BackBtn/>])
    expect(actual.find(<BirdInfo/>).text).toMatch(expected.info)
  })
})
