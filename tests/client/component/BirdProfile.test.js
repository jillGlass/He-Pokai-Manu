import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import BirdProfile from '../../../client/components/BirdProfile'
import BirdHeader from '../../../client/components/BirdHeader'
import BirdProfileTitle from '../../../client/components/BirdProfileTitle'
import BackBtn from '../../../client/components/BackBtn'
import BirdInfoBtn from '../../../client/components/BirdInfoBtn'
import { Button } from 'semantic-ui-react'

const mockBirdProfileProps = {
  image: 'public/images/piwakawaka.jpg/'
}

describe('BirdProfile component test', () => {
  it('BirdProfile contains header, image, found, bird info and back button components', () => {
    // Arrange
    const image = mockBirdProfileProps
    const expected = [<BirdHeader/>, <img/>, image, <BirdProfileTitle />,
      <Button />,
      <BirdInfoBtn />,
      <BackBtn />]
    // Act
    const wrapper = mount(<BirdProfile/>)
    wrapper.setProps({ image: image })
    const actual = wrapper.containsAllMatchingElements(expected)
    // Assert
    expect(actual).toBeTruthy()
  })
  it('render unchanged from previous snapshot', () => {
    const wrapper = mount(<BirdProfile/>)

    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
