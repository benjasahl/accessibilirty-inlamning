import React from 'react'
import { Link } from 'react-router-dom'
import talismanBox from '../img/talisman-4th-edition.webp'
import gameplay from '../img/gameplay.jpg'
import playingCards from '../img/playing-cards.png'
import './About.css'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <main>
      <h1>About the game</h1>
      <div className='about-section'>
        <div className='about-wrapper'>
          <div id='text-container' className='about-box'>
            <h2>Theme</h2>
            <div id='img-container' className='about-box'>
              <img
                src={talismanBox}
                alt='A rocky stairway leading towards a shiny crown. There are different sorts of mythical characters who are trying to reach the crown, but there is a knight who is defending it. Behind the stairway a giant dragon roars.'
              />
            </div>
            <p id='text-wrapper'>
              Talisman is an adventure board game set in a high fantasy medieval
              world. Players have 14 characters to choose from all based on role
              playing archetypes, such as heroes, wizards, villains, monsters...
            </p>
            <Link to='/theme' id='about-link'>
              <button className='read-more'>Read more about the theme</button>
            </Link>
          </div>
        </div>
        <div className='about-wrapper'>
          <div id='text-container' className='about-box'>
            <h2>Gameplay</h2>
            <div id='img-container' className='about-box'>
              <img
                src={playingCards}
                alt='There is a wizard-character card, a sword-equipment card, a "Psionic blast" spell card and an enemy card. Surrounding the character card there are four different components representing fate, health, strength and craft.'
              />
            </div>
            <p id='text-wrapper'>
              Actual game play is relatively simple, making the game easy to
              pick up with novices. On a player's turn they throw a die for
              movement. Player then chooses which direction, left or right...
            </p>
            <Link to='/gameplay' id='about-link'>
              <button className='read-more'>
                Read more about the gameplay
              </button>
            </Link>
          </div>
        </div>
        <div className='about-wrapper'>
          <div id='text-container' className='about-box'>
            <h2>Goal</h2>
            <div id='img-container' className='about-box'>
              <img
                src={gameplay}
                alt='The gaming board to Talisman, showing the three different worlds.'
              />
            </div>
            <p id='text-wrapper'>
              Each player is trying to move from the outer world and ultimately
              to the inner world. Players wander the outer, middle, and inner
              worlds trying to acquire equipment, weapons, and companions.
            </p>
            <Link to='/goal' id='about-link'>
              <button className='read-more'>Read more about the goal</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
