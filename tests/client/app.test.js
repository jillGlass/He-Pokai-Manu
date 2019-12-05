import React from 'react'
import { mount } from 'enzyme'

import App from '../../client/components/App'

test('<App />', () => {
  const expected = ''
  const wrapper = mount(<App />)
  expect(wrapper.text()).toMatch(expected)
})
