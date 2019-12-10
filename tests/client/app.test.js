import React from 'react'
import { mount } from 'enzyme'
import App from '../../client/components/App'

const mockBirds = [{ bird_id: 1, name: 'tui', info: 'some stuff', found: 0, image: 'someimagepath' }]

jest.mock('../../client/api/birds', () =>
  () => Promise.resolve(mockBirds))

describe('App successfully mounts', () => {
  it('state populates on componentDidMount', () => {
    // Arrange
    const expected = mockBirds
    const component = <App />
    // Act
    const wrapper = mount(component)
    // Assert
    return Promise
      .resolve(wrapper)
      // .then(() => wrapper.update())
      .then(() => wrapper.state('birds'))
      .then((state) => expect(state).toEqual(expected))
      .catch(err => expect(err).toBeNull())
  })
})
