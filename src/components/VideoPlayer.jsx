import React from 'react'
import { useRef, useState } from 'react'
import review from '../img/talisman-review.mp4'
import subtitles from '../subtitles.vtt'
import './VideoPlayer.css'
import { BiPlay } from 'react-icons/bi'
import { BiPause } from 'react-icons/bi'
import { BiRewind } from 'react-icons/bi'
import { BiFastForward } from 'react-icons/bi'


export default function VideoPlayer() {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [videoTime, setVideoTime] = useState(0)
  const [progress, setProgress] = useState(0)

  const videoHandler = (control) => {
    if (control === 'play') {
      videoRef.current.play()
      setPlaying(true)
      var vid = document.getElementById('video1')
      setVideoTime(vid.duration)
    } else if (control === 'pause') {
      videoRef.current.pause()
      setPlaying(false)
    }
  }

  const fastForward = () => {
    videoRef.current.currentTime += 5
  }

  const revert = () => {
    videoRef.current.currentTime -= 5
  }

  window.setInterval(function () {
    setCurrentTime(videoRef.current?.currentTime)
    setProgress((videoRef.current?.currentTime / videoTime) * 100)
  }, 1000)

  return (
    <div className='video-app'>
      <video id='video1' ref={videoRef} className='video' src={review}>
        <track
          label='English captions'
          kind='captions'
          srcLang='en'
          src={subtitles}
        />
      </video>

      <div className='controlsContainer'>
        <div className='controls'>
          <BiRewind
            onClick={revert}
            className='controlsIcon'
            alt='Rewind button'

          />
          {playing ? (
            <BiPause
              onClick={() => videoHandler('pause')}
              className='controlsIcon--small'
              alt='Pause button'
          
            />
          ) : (
            <BiPlay
              onClick={() => videoHandler('play')}
              className='controlsIcon--small'
              alt='Play button'
            />
          )}
          <BiFastForward
            className='controlsIcon'
            onClick={fastForward}
            alt='Forward button'
          />
        </div>
      </div>

      <div className='timecontrols'>
        <p className='controlsTime'>
          {Math.floor(currentTime / 60) +
            ':' +
            ('0' + Math.floor(currentTime % 60)).slice(-2)}
        </p>
        <div className='time_progressbarContainer'>
          <div
            style={{ width: `${progress}%` }}
            className='time_progressBar'
          ></div>
        </div>
        <p className='controlsTime'>
          {Math.floor(videoTime / 60) +
            ':' +
            ('0' + Math.floor(videoTime % 60)).slice(-2)}
        </p>
      </div>
    </div>
  )
}
