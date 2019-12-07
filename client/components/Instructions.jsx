import React from 'react'
import { Link } from 'react-router-dom'
import BirdHeader from './BirdHeader'
import MainFooter from './MainFooter'
import BackBtn from './BackBtn'

const Instructions = () => (
    <>
      <BirdHeader />
        <p className="instructions"> He Pokai-Manu is a treasure-hunt game for birds in New Zelands. We aim to help younger Kiwis learn more about our bird life in an exciting way, while getting them outside and interested in nature. </p>
        <br></br>
        <p className="instructions">To play, get outside and get bird spotting! Each time you spot a bird that is listed, go into the bird profile and push 'POKAI'. Your found bird will then be added to your inventory of birds.</p>
        <br></br>
        <p className="instructions">How many can you find?</p>

        <Link to="/">
          <BackBtn/>
        </Link>
        <MainFooter />
    </>
)

export default Instructions
