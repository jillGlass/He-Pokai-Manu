import React from 'react'
import { mount } from 'enzyme'
import App from '../../client/components/App'
// const nock = require('nock')

test('<App />', () => {
  const expected = ''
  const wrapper = mount(<App />)
  expect(wrapper.text()).toMatch(expected)
})
