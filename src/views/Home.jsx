import React from 'react'
import headerLogo from '../img/talisman-loading.jpg'
import './Home.css'
import review from '../img/talisman-review.mp4'
import subtitles from '../subtitles.vtt'
import { AiFillCloseCircle } from 'react-icons/ai'
import Navbar from '../components/Navbar'

const handleModal = () => {
  document.getElementById('closed-caption').style.display = 'block'
}

const handleClose = () => {
  document.getElementById('closed-caption').style.display = 'none'
}

export default function Home() {
  return (
    <>
      <main className='home-section'>
        <div className='landing-image'>
          <img
            width='60%'
            src={headerLogo}
            alt='Logo of Talisman the magical quest game.'
          />
        </div>

        <h2>Video tutorial</h2>
        <div className='video-container'>
          <video id='video' controls width='50%'>
            <source src={review} type='video/mp4' />
            <track
              label='English captions'
              kind='captions'
              srcLang='en'
              src={subtitles}
            />
          </video>

          <div id='closed-caption'>
            <div className='caption-header'>
              <div id='close-icon' onClick={handleClose}>
                <AiFillCloseCircle id='close-circle' />
                <p>Close</p>
              </div>
            </div>

            <p>
              **An adult male and female looks into the camera.**
              <br></br>
              <br></br>
              Steven: Hey game boarders, I'm Steve Nash. <br></br>
              <br></br> Michaela: And I'm Michaela di Cesare, and here's our
              review of Talisman.<br></br>
              <br></br> [Exciting music in the background]<br></br>
              <br></br>
              **A red dice is shown behind the channels name "Board to Death"**.
              <br></br>
              <br></br> Steven: This game by Fantasy Flight Games is awesome!{' '}
              Your character is in a fantasy world setting and he's trying to
              get the legendary Crown of Command!<br></br>
              <br></br>
              **Four people are playing Talisman the board game.** <br></br>
              <br></br>
              Michaela: Yeah, and you start the game by selecting one character
              of many and just placing him on the starting location.
              <br></br>
              <br></br>
              **The play cards and components are zoomed in** <br></br>
              <br></br> Steven: What's really cool is that each character has an
              alignment; he can be good, evil or neutral, and this affects how
              you play. <br></br>
              <br></br>
              Michaela: The game is also very random; a lot of rolling of dices
              and drawing cards are random. I mean sometimes the weakest enemy
              can defeat you, or landing on a square you really need takes
              forever because movement is by dice roll. <br></br>
              <br></br>
              **A player is moving a character on the board.** <br></br>
              <br></br> Michaela: But it doesn't change the fact that this game
              is a blast to play, when you're over four players. <br></br>
              <br></br> Steven: I agree, it's very random. Steven: You roll the
              dice to move, then you roll the dice to see what you get, then you
              draw a card at random to see who you encounter etc. But still fun
              and fast-paced. <br></br>
              <br></br>
              **A player picks up two cards and gives one of the cards to
              another player**<br></br>
              <br></br> Michaela: I like the fact that when you meet a monster
              and don't defeat him he stays on the board. So the board is always
              being upgraded with monsters, shops and NPCs.<br></br>
              <br></br> **The board is zoomed in, showing monsters, shops and
              non-playable characters**<br></br>
              <br></br> Steve: Speaking of NPCs, you can also get followers to
              help you in this quest. I love this part of the game! You can also
              have a mule follower that helps you carry more items.
              <br></br>
              <br></br>Michaela: Yes, but you have to be careful. Some followers
              are actually annoying and can ruin the game for you. <br></br>
              <br></br>Steve: Okay so let's talk about the board. It's separated
              in three parts; the outer ring, the middle ring and the center.
              The outer ring is basically forest, woods, towns and plains. The
              objective of the game is to get your character for the center
              square, called the “Crown of Command”. <br></br>
              <br></br> Michaela: So your character ventures for a while on the
              outside region until he feels strong enough to go to the middle
              region. You can get there by killing the Sentinel at the bridge or
              if you have an axe, build a raft when you're in the woods.{' '}
              <br></br>
              <br></br> Steve: Once in the middle region you try to get a
              Talisman, which is the key to enter the Crown of Command-room.
              <br></br>
              <br></br> **A golden, triangular Talisman is shown with a red
              jewel inside** <br></br>
              <br></br> Steve: So once you have a Talisman you try to enter the
              center region, where you can only move one square at a time.
              Defeat all the challenges, again mostly by rolling dices.{' '}
              <br></br>
              <br></br> Michaela: What really sucks is once you've done all the
              challenges and are about to enter the Crown room, another player
              most likely has the “Steal spell”, which makes you lose your
              Talisman. And then you're stuck there feeling you just want to
              quit the game. 0<br></br>
              <br></br> Steve: That's true, when that happens it`s the most
              annoying thing ever.<br></br>
              <br></br> Michaela: So once you're lucky enough to be in the crown
              room, you roll one dice when it's your turn.For every five, four
              or six, everyone else loses a life. When everybody dies, you win.{' '}
              <br></br>
              <br></br> **The board is panned. The players are fighting
              eachother by rolling dices.** <br></br>
              <br></br> Steve: But you have to be careful! Because if another
              player comes into that room, then you have to battle to death
              using only strength. Meaning if your character is a
              craft-character, then you might get a beating.
              <br></br>
              <br></br> Michaela: That's why we made the house rule of choosing
              what you want to attack with. We just didn't see why a craft user
              wouldn't use craft to attack.
              <br></br>
              <br></br> Steve: So that's the overview of the game. What did you
              think about the quality? The fun factor? And the artwork?{' '}
              <br></br>
              <br></br> **An angry green orc is with a sword is shown**{' '}
              <br></br>
              <br></br> Michaela: The artwork is really nice! The board itself
              and the pieces are very detailed, beautiful character sheets and
              overall a really fun game to play. Until the other player steals
              your Talisman right before you enter the Crown room.
              <br></br>
              <br></br> Steve: I can't agree more with you. That pretty much
              sums up my score, is 9 on 10. <br></br>
              <br></br> Michaela: 9 on 10 for me as well.
              <br></br>
              <br></br> **Steve and Michaela are back in view.** <br></br>
              <br></br> Steve: So there you have it folks. To get our latest
              reviews, check us out on Twitter or follow us on our Facebook page
              at “Board to Death TV”. <br></br>
              <br></br> Michaela: Yeah, you can also send us emails to let us
              know what games you want to see reviewed on the show. <br></br>
              <br></br>Steve: Thanks again for watching and happy gaming!
            </p>
          </div>
        </div>
        <button id='display-tr' onClick={handleModal}>
          Show transcription
        </button>
      </main>
    </>
  )
}
