import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './Navbar.css'
import { AiFillHome } from 'react-icons/ai'
import { FaDice } from 'react-icons/fa'
import { MdContactMail } from 'react-icons/md'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-container'>
        <Link to='/' id='link'>
          <AiFillHome id='logo' />
          <span>Home</span>
        </Link>
        <Link to='/about' id='link'>
          <FaDice id='logo' />
          <span>About</span>
        </Link>
        <Link to='/contact' id='link'>
          <MdContactMail id='logo' />
          <span>Contact</span>
        </Link>
      </div>
      {/* <img src={logo} width='10%' alt='A triangular Talisman logo' /> */}
    </nav>
  )
}
