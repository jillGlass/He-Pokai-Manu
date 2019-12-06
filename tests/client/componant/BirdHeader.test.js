import React from 'react'
import { mount } from 'enzyme'

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
})