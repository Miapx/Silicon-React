import React from 'react'
import Logotype from '../assets/images/logosmaller.svg'
import LogotypeLight from '../assets/images/logo-light.svg'
import Navbar from './Navbar'
import DarkModeSwitch from './DarkModeSwitch'
import BtnSignIn from './BtnSignIn'
import HamMenu from './HamMenu'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header>
        <div className="container">
                <Link id="logo" to="/"><img src={Logotype} alt="silicon logotype" /></Link>
                <Link id="logolight" to="/"><img src={LogotypeLight} alt="silicon logotype" /></Link>

                <Navbar />
                <DarkModeSwitch />
                <BtnSignIn />
                <HamMenu />

              
            </div>
        </header>
    )
}

export default Header