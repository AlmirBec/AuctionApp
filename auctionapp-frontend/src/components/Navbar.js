import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import '../style/navbar.css'
export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='icons'>
        <FaFacebook style={{background: '#9B9B9B'}}/>
        <FaInstagram style={{background: '#9B9B9B'}}/>
        <FaTwitter style={{background: '#9B9B9B'}}/>
      </div>
      <div className='links'>
        <a href="http://localhost:3000/login">Log in</a>
        <a href='http://localhost:3000/registration'>Create an account</a>
      </div>
    </nav>
  )
}
