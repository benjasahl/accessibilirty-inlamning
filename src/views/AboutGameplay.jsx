import React from 'react'
import talismanBox from '../img/talisman-4th-edition.webp'
import gameplay from '../img/gameplay.jpg'
import playingCards from '../img/playing-cards.png'
import { useNavigate, Link } from 'react-router-dom'
import './About.css'
import Navbar from '../components/Navbar'

export default function AboutGameplay() {
  return (
    <>
      <div>
        <header className='about-header'>
          <p>
            <Link to='/about' id='return'>
              About
            </Link>{' '}
            \ <span id='current'>Gameplay</span>
          </p>
          <h2>Gameplay</h2>
        </header>
        <div className='about-goal'>
          <img
            width='50%'
            src={playingCards}
            alt='There is a wizard-character card, a sword-equipment card, a "Psionic blast" spell card and an enemy card. Surrounding the character card there are four different components representing fate, health, strength and craft.'
          />

          <p id='goal-text'>
            Actual game play is relatively simple, making the game easy to pick
            up with novices. On a player's turn they throw a die for movement.{' '}
            <br></br>
            <br></br> Player then chooses which direction, left or right or if
            meeting qualifications may be able to move from outer to middle
            world, or middle to inner world. Once on space, player follows
            instructions on space, or encounters face up cards already in space,
            or other player if in space. <br></br>
            <br></br>Most spaces have a player draw a number of cards to
            encounter. These can be creatures, companions, weapons, equipment,
            treasure, or relics. Players must fight creatures and win before
            acquiring any other items or companions.
          </p>
        </div>
      </div>
    </>
  )
}
