import React from 'react'
import "../styles/topbar.css";
import logo from '../assets/images/mylogo.jpg'
const Topbar = () => {
  return (
    <header className='header'>
      <img src={logo} className='navbar-logo' />
      
      <nav className='navbar'>
        <a href='/'>Explore</a>
        <a href='/'>Dashboard</a>
        <a href='/'>Profile</a>

      </nav>
    </header>
  )
}
export default Topbar