import React, { useState } from 'react'
import menu from '../assets/images/menu.svg'
import { NavLink } from 'react-router-dom'



const HamMenu = () => {

  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
  <> 
    <button className="hamburger" onClick={toggleMenu}>
      <img src={menu} alt="" />
    </button>
    <div className={`${showMenu ? 'mobile-menu' : 'mobile-menu-hidden'}`}>
      <NavLink className="nav-link whitetext mobile-link" to="/features">Features</NavLink>
      <NavLink className="nav-link whitetext mobile-link" to="/contact">Contact</NavLink>
    </div>
  </>
  )
}

export default HamMenu