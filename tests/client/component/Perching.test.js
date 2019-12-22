import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import Perching from '../../../client/components/Perching'

describe('<Perching /> component test', () => {
  it('render unchanged from previous snapshot', () => {
    const wrapper = mount(<Perching/>)

    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
