import React from 'react'
import appStoreDark from '../assets/images/appstore.svg'
import appStoreLight from '../assets/images/appstore-light.svg'
import googlePlayDark from '../assets/images/googleplay.svg'
import googlePlayLight from '../assets/images/googleplay-light.svg'
import iphoneMyBudget from '../assets/images/iphone-mybudget.svg'
import iphoneYourCards from '../assets/images/iphone-yourcards.svg'


const Hero = () => {
  return (
    <section id="hero" className="grad">
        <div className="container">
            <div className="content">
                <h1>Manage All Your Money in One App</h1>
                <p className="text-L">We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
                <div className="buttons">
                    <a className="btn-download-app" href="#"><img src={appStoreDark} alt="appstore" /></a>
                    <a className="btn-download-app-light" href="#"><img src={appStoreLight} alt="appstore" /></a>
                    <a className="btn-download-app" href="#"><img src={googlePlayDark} alt="googleplay" /></a>
                    <a className="btn-download-app-light" href="#"><img src={googlePlayLight} alt="appstore" /></a>

                </div>
                <a href="#" className="discover-more">
                    <span className="btn-circle">
                        <i className="fa-solid fa-chevron-down"></i>
                    </span>
                    <span className="text-S">Discover More</span>
                </a>
            </div>
            <div className="images">
                <img className="img-back" src={iphoneMyBudget} alt="Silicon manages your budget on your phone" />
                <img className="img-front" src={iphoneYourCards} alt="Silicon manages your cards on your phone" />    
            </div>
        </div>
    </section>
    )
}

export default Hero