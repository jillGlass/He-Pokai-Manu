import fetch from '../../client/api/birds'
import React from 'react'
import { mount } from 'enzyme'
import App from '../../client/components/App'
const nock = require('nock')

describe('App successfully mounts', () => {
  it('', () => {
    // Arrange
    const expected = [
      { bird_id: 1, name: 'tui', info: 'some stuff', found: 0, image: 'someimagepath' }
    ]

    nock('http://locahost:3000/api/v1')
      .get('/')
      .reply(200, expected)

    // Act
    return fetch()
      .then(response => {
        // Assert
        expect(response).toEqual(expected)
      })
  })
})
