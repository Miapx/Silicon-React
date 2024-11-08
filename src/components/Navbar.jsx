import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id="main-menu" className="navbar">
        <NavLink className="nav-link whitetext" to="/features">Features</NavLink>
        <NavLink className="nav-link whitetext" to="/contact">Contact</NavLink>
    </nav>  
    )
}

export default Navbar