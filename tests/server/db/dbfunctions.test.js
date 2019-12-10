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

    const expected = 20

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
  it('resetBirds returns 0 as expected', () => {
    expect.assertions(1)
    return db.resetBirds(testDb)
      .then(output => expect(output).toBe(0))
  })
  it('resetBirds updates database so that no birds have found: 1', () => {
    expect.assertions(1)
    return db.resetBirds(testDb)
      .then(() => {
        return db.getBirds(testDb)
          .then((birds) => birds.filter(bird => bird.found === 1))
          .then(trueBirds => expect(trueBirds).toHaveLength(0))
      })
  })
})
