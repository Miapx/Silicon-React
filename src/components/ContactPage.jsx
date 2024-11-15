import React from 'react'
import bxEnvelope from '../assets/images/bx-envelope.svg'
import arrowRightPrimClr from '../assets/images/arrowrightprimclr.svg'
import bxAdd from '../assets/images/add-group.svg'
import map from '../assets/images/map.svg'
import mapIcon from '../assets/images/bx-map.svg'
import phoneCallIcon from '../assets/images/bx-phone-call.svg'
import clockIcon from '../assets/images/bx-time-five.svg'
import fbIcon from '../assets/images/bxl-facebook-square.svg'
import xIcon from '../assets/images/bxl-twitter.svg'
import igIcon from '../assets/images/bxl-instagram-alt.svg'
import ytIcon from '../assets/images/bxl-youtube.svg'
import ConsultCard from './ConsultCard'

const ContactPage = () => {
  return (
    <> 
    <div className="bg-clr"> 
    <div className="contactpage container"> 
    <div className="contactusleft"> 
        <h1>Contact Us</h1>
        <div className="contactus">
            <button className="btn-circle"><img src={bxEnvelope} alt="Envelope" /></button>
        <div>
            <h3>Email us</h3>
            <p className="text-S">Please feel free to drop us a line. We will respond as soon as possible</p>
            <a href="#">Leave a message<img src={arrowRightPrimClr} alt="Arrow pointing right" /></a>
        </div>
    </div>

    <div className="contactus">
        <button className="btn-circle"><img src={bxAdd} alt="Add-icon" /></button>
        <div>
            <h3>Careers</h3>
            <p className="text-S">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, nesciunt accusamus?</p>
            <a href="#">Send an application<img src={arrowRightPrimClr} alt="Arrow pointing right" /></a>
        </div>
    </div>
    </div>
    <ConsultCard />
    </div>
    </div>
    <section className="container findus flex">
        <div className="map">
            <img className="mapImg" src={map} alt="Map" />
        </div>
        <div>
        <div className="location gap">
            <h3>Medical center 1</h3>
                <div className="flex"> 
                    <img className="flex-icon" src={mapIcon} alt="Map Icon" />
                <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
            </div>
            <div className="flex"> 
                <img src={phoneCallIcon} alt="Phonecall Icon" />
                <p>(406) 555-0120</p>
            </div>

            <div className="flex"> 
                <img id="align-fs" src={clockIcon} alt="Clock Icon" />
                <div className="open-hours"> 
                    <h5>Mon - Fri:</h5> <p>9:00 am - 22:00 am</p> 
                    <br/> 
                    <h5>Sat - Sun:</h5> <p>9:00 am - 20:00 am</p>
                </div>
            </div>
        </div>

        <div className="location gap">
            <h3>Medical center 2</h3>
            <div className="flex"> 
                <img className="flex-icon" src={mapIcon} alt="Map Icon" />
                <p>2464 Royal Ln. Mesa,New Jersey 45463</p>
            </div>
            <div className="flex"> 
                <img src={phoneCallIcon} alt="Phonecall Icon" />
                <p>(406) 544-0123</p>
            </div>

            <div className="flex"> 
                <img id="align-fs" src={clockIcon} alt="Clock Icon" />
                <div className="open-hours"> 
                    <h5>Mon - Fri:</h5> <p>9:00 am - 22:00 am</p> 
                    <br/>
                    <h5>Sat - Sun:</h5> <p>9:00 am - 20:00 am</p>
                </div>
            </div>
        </div>

        <div className="socials">
            <a href="https://facebook.com"> 
                <img className="icon" src={fbIcon} alt="Facebook-icon" />
            </a>
            <a href="https://twitter.com"> 
                <img className="icon" src={xIcon} alt="X-icon" />
            </a>
            <a href="https://instagram.com"> 
                <img className="icon" src={igIcon} alt="Instagram-icon" />
            </a>
            <a href="https://youtube.com"> 
                <img className="icon" src={ytIcon} alt="Youtube-icon" />
            </a>
        </div>
        </div>
    </section>
</>

  )
}


export default ContactPage