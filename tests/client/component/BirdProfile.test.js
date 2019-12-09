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
  image: 'images/piwakawaka.jpg',
  name: 'Pīwakawaka'
}

describe('BirdProfile component test', () => {
  it('BirdProfile contains header, image, found, bird info and back button components', () => {
    // Arrange
    const params = { params: { id: 3 } }
    const {image, name} = mockBirdProfileProps
    const expected = [<BirdHeader/>, <img/>, image, <BirdProfileTitle />, name,
      <Button />,
      <BirdInfoBtn />,
      <BackBtn />]
    // Act
    const wrapper = mount(<BirdProfile match={params}/>)
    wrapper.setProps({ image: image, name: name })
    const actual = wrapper.containsAllMatchingElements(expected)
    // Assert
    expect(actual).toBe(expected)
  })
  // it('render unchanged from previous snapshot', () => {
  //   const wrapper = mount(<BirdProfile/>)

  //   expect(toJson(wrapper)).toMatchSnapshot()
  // })
})
