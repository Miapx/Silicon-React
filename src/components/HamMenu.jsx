import React from 'react'
import menu from '../assets/images/menu.svg'


const HamMenu = () => {
  return (
    <button className="hamburger">
        <img src={menu} alt="" />
    </button>
  )
}

export default HamMenu