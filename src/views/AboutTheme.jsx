import React from 'react'
import talismanBox from '../img/talisman-4th-edition.webp'
import gameplay from '../img/gameplay.jpg'
import playingCards from '../img/playing-cards.png'
import { useNavigate, Link } from 'react-router-dom'
import './About.css'
import Navbar from '../components/Navbar'
export default function AboutTheme() {
  return (
    <div>

      <header className='about-header'>
        <p>
          <Link to='/about' id='return'>
            About
          </Link>{' '}
          \ <span id='current'>Theme</span>
        </p>
        <h2>Theme</h2>
      </header>

      <div className='about-goal'>
        <img
          id='goal-img'
          width='30%'
          src={talismanBox}
          alt='A rocky stairway leading towards a shiny crown. There are different sorts of mythical characters who are trying to reach the crown, but there is a knight who is defending it. Behind the stairway a giant dragon roars.'
        />

        <p id='goal-text'>
          Talisman is an adventure board game set in a high fantasy medieval
          world. Players have 14 characters to choose from all based on role
          playing archetypes, such as heroes, wizards, villains, monsters.{' '}
          <br></br>
          <br></br> The game makes players feel they are traveling the world to
          find equipment, weapons, ancient relics, and companions that will help
          them on their quest to acquire the Crown of Command. <br></br>
          <br></br> Along the way they visit various locales in the worlds,
          battle each other and fantastic creatures to make their way to the
          top.
        </p>
      </div>
    </div>
  )
}
