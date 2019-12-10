import React from 'react'
import BirdProfile from '../../../client/components/BirdProfile'
import { HashRouter as Router } from 'react-router-dom'
import { mount } from 'enzyme'

const mockBirds = [
  { bird_id: 1, name: 'fail', info: 'Spot these friendly birds by their large tail. Also known as fantail, these birds build their nests with small materials woven with cobwebs and like to eat moths, flies, beetles and spiders. They also love to have a bird-bath! They live all over New Zealand, even in the Chatham Islands. You can find them in native and introduced forest, farm shelterbelts, orchards as well as suburban parks and gardens.', image: '/images/piwakawaka.jpg', found: false },
  { bird_id: 2, name: 'fail', info: 'Spot these friendly birds by their large tail. Also known as fantail, these birds build their nests with small materials woven with cobwebs and like to eat moths, flies, beetles and spiders. They also love to have a bird-bath! They live all over New Zealand, even in the Chatham Islands. You can find them in native and introduced forest, farm shelterbelts, orchards as well as suburban parks and gardens.', image: '/images/piwakawaka.jpg', found: false },
  { bird_id: 3, name: 'Pīwakawaka', info: 'Spot these friendly birds by their large tail. Also known as fantail, these birds build their nests with small materials woven with cobwebs and like to eat moths, flies, beetles and spiders. They also love to have a bird-bath! They live all over New Zealand, even in the Chatham Islands. You can find them in native and introduced forest, farm shelterbelts, orchards as well as suburban parks and gardens.', image: '/images/piwakawaka.jpg', found: false },
  { bird_id: 4, name: 'fail', info: 'Spot these friendly birds by their large tail. Also known as fantail, these birds build their nests with small materials woven with cobwebs and like to eat moths, flies, beetles and spiders. They also love to have a bird-bath! They live all over New Zealand, even in the Chatham Islands. You can find them in native and introduced forest, farm shelterbelts, orchards as well as suburban parks and gardens.', image: '/images/piwakawaka.jpg', found: false },
  { bird_id: 5, name: 'fail', info: 'Spot these friendly birds by their large tail. Also known as fantail, these birds build their nests with small materials woven with cobwebs and like to eat moths, flies, beetles and spiders. They also love to have a bird-bath! They live all over New Zealand, even in the Chatham Islands. You can find them in native and introduced forest, farm shelterbelts, orchards as well as suburban parks and gardens.', image: '/images/piwakawaka.jpg', found: false },
  { bird_id: 6, name: 'fail', info: 'Spot these friendly birds by their large tail. Also known as fantail, these birds build their nests with small materials woven with cobwebs and like to eat moths, flies, beetles and spiders. They also love to have a bird-bath! They live all over New Zealand, even in the Chatham Islands. You can find them in native and introduced forest, farm shelterbelts, orchards as well as suburban parks and gardens.', image: '/images/piwakawaka.jpg', found: false },
]

jest.mock('../../../client/api/birds', () =>
  () => Promise.resolve(mockBirds)
)

test('state populates when componentDidMount is called', () => {
  // Arrange
  const expected = mockBirds
  const match = { params: { id: '3' } }
  const component = <Router><BirdProfile match={match} /></Router>
  // Act
  const wrapper = mount(component)
  // Assert
  return Promise
    .resolve(wrapper)
    .then(() => wrapper.find(BirdProfile).state('birds'))
    .then((state) => expect(state).toEqual(expected))
})
test('img element renders with correct data from componentDidMount call', () => {
  // Arrange
  const node = 'img'
  const match = { params: { id: '3' } }
  const expected = mockBirds.find(bird => bird.bird_id === Number(match.params.id))
  const component = <Router><BirdProfile match={match} /></Router>
  // Act
  const wrapper = mount(component)
  
  // Assert
  return Promise
    .resolve(wrapper)
    .then(() => wrapper.update())
    .then((wrapper) => wrapper.find(BirdProfile).find(node).prop('alt'))
    .then((actual) => expect(actual).toEqual(expected.name))
})
