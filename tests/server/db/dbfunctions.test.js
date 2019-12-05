const env = require('./test-environment')
const db = require('../../../server/db/db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

describe('Bird database function tests', () => {
  it('get birds returns an array the length of all the bird info', () => {
    expect.assertions(1)

    const expected = 2

    return db.getBirds(testDb)
      .then(birds => {
        const actual = birds.length
        expect(actual).toBe(expected)
      })
  })
  it('get bird returns the details of a single bird', ( => {
    expect.assertions(1)

    const id = 1

    const expected = {
      bird_id:  ,
      name:   ,
      bird_info: ,
      bird image link: ,
      found:
    }

    return db.getBird(id, testDb)
      .then(bird => {
        const actual = bird
        expect(actual).toEqual(expected)
      })
  }))
  
it('found birds returns a boolean value of true for found', () => {
  expect.assertions(1)

  return db.foundbird(bird_id, testDb)
    .then(bird => {
      expect(bird.found).toBe(1)
    })
})
})
