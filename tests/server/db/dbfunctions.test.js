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

    const expected = 10

    return db.getBirds(testDb)
      .then(birds => {
        const actual = birds.length
        expect(actual).toBe(expected)
      })
  })

  it('foundbirds function changes the boolean value of the selected bird to true', () => {
    expect.assertions(1)

    const id = 2

    return db.foundBird(id, testDb)
      .then(bird => {
        expect(bird).toBeTruthy()
      })
  })
})
