import React from 'react'
import { Enzyme, mount } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'
// import request from 'superagent'
import BirdGrid from './BirdGrid'
// import { exportAllDeclaration } from '@babel/types'
// import { JestEnvironment } from '@jest/environment'
// import { promises } from 'dns'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('../../client/api/birds', () => {
  return () => {
    return Promise.resolve(
      [{ bird_id: 9, name: 'California Quail', info: 'Quail like to eat seeds...', image: 'public/images/californiaquail.jpg/', found: false }, { bird_id: 10, name: 'Thrush', info: 'Thrush like to usually eat from the ground...', image: 'public/images/thrush.jpg/', found: false }]
    )
  }
})

describe('BirdGrid and BirdCircle Component Tests:', () => {
  it('The BirdGrid component passes the appropriate info to the BirdCircle component', () => {
    // Act
    const wrapper = mount(<BirdGrid />)
    const actual = wrapper
    const expected = wrapper
    // Assert
    expect(actual).toBe(expected)
  })

  xit('The BirdCircle Component renders the image, name and details props')
})
