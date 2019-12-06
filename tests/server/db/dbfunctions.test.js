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
  it('get bird returns the details of a single bird', () => {
    expect.assertions(1)

    const id = 1

    const expected = {
      name: 'Tui',
      info: 'Tui are unique to New Zealand and belong to the honey-eater family which means that they feed mainly on nectar from the flowers of native plants. They can be quite aggressive! They will chase other Tui away from food and tasty nectar. Tui are found throughout the North, South and Stewart Islands of New Zealand.',
      image: null,
      found: 0
    }

    return db.getBird(id, testDb)
      .then(bird => {
        const actual = bird
        expect(actual).toEqual(expected)
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
