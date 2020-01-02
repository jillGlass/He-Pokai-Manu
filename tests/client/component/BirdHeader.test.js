import React from 'react'

import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import BirdHeader from '../../../client/components/BirdHeader'

describe('<BirdHeader /> component test', () => {
  it('renders headers', () => {
    // Arrange
    const expected = 'He Pokai Manu'

    // Act
    const wrapper = mount(<BirdHeader />)
    const actual = wrapper.text()
    // Assert
    expect(actual).toContain(expected)
  })
  it('render unchanged from previous snapshot', () => {
    const wrapper = mount(<BirdHeader/>)

    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
