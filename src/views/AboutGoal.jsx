import React from 'react'
import talismanBox from '../img/talisman-4th-edition.webp'
import gameplay from '../img/gameplay.jpg'
import playingCards from '../img/playing-cards.png'
import { useNavigate, Link } from 'react-router-dom'
import './About.css'
import Navbar from '../components/Navbar'

export default function AboutGoal() {
  return (
    <div>

      <header className='about-header'>
        <p>
          <Link to='/about' id='return'>
            About
          </Link>{' '}
          \ <span id='current'>Goal</span>
        </p>
        <h2>Goal</h2>
      </header>
      <div className='about-goal'>
        <img
          id='goal-img'
          width='40%'
          src={gameplay}
          alt='The gaming board to Talisman, showing the three different worlds.'
        />

        <p id='goal-text'>
          Each player is trying to move from the outer world and ultimately to
          the inner world. Players wander the outer, middle, and inner worlds
          trying to acquire equipment, weapons, and companions.<br></br>
          <br></br> They will also improve statistics with equipment,
          companions, and encounters and battles with fantasy creatures and each
          other. <br></br>
          <br></br>Once they complete a Talisman quest, players will enter the
          inner world and face its challenges to finally reach the Portal of
          Power to claim the Crown of Command. Then the other players must race
          to stop this player before he eventually kills them all with the
          Command spell.
        </p>
      </div>
    </div>
  )
}
