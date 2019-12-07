import React from 'react'
import { mount } from 'enzyme'
import BirdProfile from '../../../../client/components/BirdProfile'
import BirdHeader from '../../../../client/components/BirdHeader'
import BirdProfileTitle from '../../../../client/components/BirdProfileTitle'
import BackBtn from '../../../../client/components/BackBtn'
import FoundBtn from '../../../../client/components/FoundBtn'
import BirdInfoBtn from '../../../../client/components/BirdInfoBtn'

const mockBirdProfileProps = {
  image: 'public/images/piwakawaka.jpg/'
}

describe('BirdProfile component test', () => {
  it('BirdProfile contains header, image, found, bird info and back button components', () => {
    // Arrange
    const image = mockBirdProfileProps
    const expected = [<BirdHeader/>, <img/>, image, <BirdProfileTitle />,
      <FoundBtn />,
      <BirdInfoBtn />,
      <BackBtn />]
    // Act
    const wrapper = mount(<BirdProfile/>)
    wrapper.setProps({ image: image })
    const actual = wrapper.containsAllMatchingElements(expected)
    // Assert
    expect(actual).toBeTruthy()
  })
  it('BirdProfile component has expected props', () => {
    // Arrange
    const image = mockBirdProfileProps
    const expected = { image: 'image' }

    // Act
    const wrapper = mount(<BirdProfile/>)
    const actual = wrapper.setProps({ image: image })
    const actualInfo = wrapper.text()

    // Assert
    expect(actual).hasOwnProperty(expected.image)
    expect(actualInfo).toContain('Tui')
  })
})
