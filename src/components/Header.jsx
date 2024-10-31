import React from 'react'
import Logotype from '../assets/images/logosmaller.svg'
import LogotypeLight from '../assets/images/logo-light.svg'
import Navbar from './Navbar'
import DarkModeSwitch from './DarkModeSwitch'
import BtnSignIn from './BtnSignIn'
import HamMenu from './HamMenu'


const Header = () => {
  return (
    <header>
        <div className="container">
                <a id="logo" href="index.html"><img src={Logotype} alt="silicon logotype" /></a>
                <a id="logolight" href="index.html"><img src={LogotypeLight} alt="silicon logotype" /></a>

                <Navbar />
                <DarkModeSwitch />
                <BtnSignIn />
                <HamMenu />

              
            </div>
        </header>
    )
}

export default Header