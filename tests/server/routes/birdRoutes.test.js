const request = require('supertest')
const server = require('../../../server/server')

const mockBirds = [{ bird_id: 1, name: 'Tui', info: 'Tui are unique to New Zealand and belong to the honey-eater family which means that they feed mainly on nectar from the flowers of native plants. They can be quite aggressive! They will chase other Tui away from food and tasty nectar. Tui are found throughout the North, South and Stewart Islands of New Zealand.', found: false },
  { bird_id: 2, name: 'Kererū', info: 'These big birds like to eat fruit, leaves, twigs and shoots and can eat so much that they get too full and fall out of trees. They are very important to our forests as they are the only bird left big enough to swallow seeds. They then poo the seeds out later in another place - helping to establish new forests. These birds are found all over New Zealand including many offshore islands.', found: false },
  { bird_id: 3, name: 'Pīwakawaka', info: 'Spot these friendly birds by their large tail. Also known as fantail, these birds build their nests with small materials woven with cobwebs and like to eat moths, flies, beetles and spiders. They also love to have a bird-bath! They live all over New Zealand, even in the Chatham Islands. You can find them in native and introduced forest, farm shelterbelts, orchards as well as suburban parks and gardens.', found: false },
  { bird_id: 4, name: 'Ruru', info: 'Ruru are heard at dusk and throughout the night and they are named after their haunting call. Ruru can turn their heads 270 degrees and like to eat beetles, weta, moths and spiders. They are also known to eat small birds, rats and mice! Ruru are found throughout New Zealand and in Maori tradition they are seen as watchful guardians of the forest.', found: false },
  { bird_id: 9, name: 'California Quail', info: 'Quail like to eat seeds, fruit and leaves. They feed mainly in the early morning and late afternoon and love to eat seeds spilled from bird feeders - beware of scaring them off though, they are very shy! They are found throughout most of New Zealand on the scrubby edges of rivers, forests, roads and rural gardens.', found: false },
  { bird_id: 10, name: 'Thrush', info: 'Thrush like to usually eat from the ground, feeding on spiders, snails, slugs and worms but they also like to eat small berries. They can break open a snail by smashing the shell on a hard surface. They live all over New Zealand up until around 800m above sea level. You can find them in your backyard as well as lowland native forest.', found: false }]

jest.mock('../../../server/db/db', () => ({
  getBirds: () => Promise.resolve(mockBirds),
  foundBird: () => Promise.resolve(1)
}))

describe('Server side routes call db functions correctly', () => {
  it('GET /', () => {
    return request(server)
      .get('/api/v1/')
      .then((res) => {
        expect(res.body).toEqual(mockBirds)
      })
  })
  it('PUT /:id', () => {
    return request(server)
      .put('/api/v1/3')
      .then((res) => {
        expect(res.body).toEqual(1)
      })
  })
})
