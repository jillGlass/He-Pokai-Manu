import React from 'react'
import BirdProfile from '../../../client/components/BirdProfile'
import { HashRouter as Router } from 'react-router-dom'
import { mount } from 'enzyme'

const mockBirds = [
  { bird_id: 1, name: 'Tui', info: 'Tui are unique to New Zealand and belong to the honey-eater family which means that they feed mainly on nectar from the flowers of native plants. They can be quite aggressive! They will chase other Tui away from food and tasty nectar. Tui are found throughout the North, South and Stewart Islands of New Zealand.', image: '/images/tui.jpg', found: true },
  { bird_id: 2, name: 'Kererū', info: 'These big birds like to eat fruit, leaves, twigs and shoots and can eat so much that they get too full and fall out of trees. They are very important to our forests as they are the only bird left big enough to swallow seeds. They then poo the seeds out later in another place - helping to establish new forests. These birds are found all over New Zealand including many offshore islands.', image: '/images/kereru.jpg', found: true },
  { bird_id: 3, name: 'Pīwakawaka', info: 'Spot these friendly birds by their large tail. Also known as fantail, these birds build their nests with small materials woven with cobwebs and like to eat moths, flies, beetles and spiders. They also love to have a bird-bath! They live all over New Zealand, even in the Chatham Islands. You can find them in native and introduced forest, farm shelterbelts, orchards as well as suburban parks and gardens.', image: '/images/piwakawaka.jpg', found: false },
  { bird_id: 4, name: 'Ruru', info: 'Ruru are heard at dusk and throughout the night and they are named after their haunting call. Ruru can turn their heads 270 degrees and like to eat beetles, weta, moths and spiders. They are also known to eat small birds, rats and mice! Ruru are found throughout New Zealand and in Maori tradition they are seen as watchful guardians of the forest.', image: '/images/ruru.jpg', found: false },
  { bird_id: 5, name: 'Kōtare', info: 'Kōtare, also known as sacred kingfisher, are the only species of kingfisher native to New Zealand. They like to build perches in earth banks, which they tunnel into with their beaks. They live both around the sea, where they feed on small crabs and fish, as well as inland, where what they feed on includes worms, weta, spiders, mice and even small birds!', image: '/images/kotare.jpg', found: false }
]

jest.mock('../../../client/api/birds', () =>
  () => Promise.resolve(mockBirds)
)

test('state populates when componentDidMount is called', () => {
  // Arrange
  const expected = mockBirds
  const match = { params: { id: 3 } }
  const component = <Router><BirdProfile match={match} /></Router>
  // Act
  const wrapper = mount(component)
  // Assert
  return Promise
    .resolve(wrapper)
    .then(() => wrapper.find(BirdProfile).state('birds'))
    .then((state) => expect(state).toEqual(expected))

})
