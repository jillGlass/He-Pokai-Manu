import React from 'react'
import { Link, HashRouter as Router } from 'react-router-dom'
import BirdHeader from './BirdHeader'
import reset from '../api/reset'
import { Button } from 'semantic-ui-react'

import BackBtn from './BackBtn'

function handleClick () {
  reset()
}

const Instructions = () => (
    <>
      <BirdHeader />
      <div className='instructionsWrap'>
        <Link to="/">
          <Button className="clearButton" onClick= {() => handleClick()} size='huge'>Clear Found Birds</Button>
        </Link>
        <p className="instructions"> He Pokai Manu is a treasure-hunt game for birds in Aotearoa. We aim to help younger Kiwis learn more about our bird life in an exciting way, while getting them outside and interested in nature. </p>
        <br></br>
        <p className="instructions">To play, get outside and get bird spotting! Each time you spot a bird that is listed, go into the bird profile and push 'POKAI'. Your found bird will then be added to your inventory of birds.</p>
        <br></br>
        <p className="instructions">How many can you find?</p>
        <Router>
          <Link to="/">
            <BackBtn/>
          </Link>
        </Router>

      </div>
    </>
)

export default Instructions
