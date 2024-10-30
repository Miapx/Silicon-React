import React from 'react'
import notifBell from '../assets/images/notification.svg'

const Subscribe = () => {
  return (
    <section id="subscribe">
        <div className="container"> 
            <div className="notifbell"> 
                <img src={notifBell} alt="Notification-bell" />
            </div>
            <div>
                <h2>Subscribe to our newsletter to stay informed about latest updates</h2>
            </div>
            <form className="emailtosub" id="emailtosub"> 
                <label className="form-label" htmlFor="email"></label>
                <i className="fa-thin fa-envelope envelope"></i>
                <input className="form-input" type="email" name="email" id="sub-email" placeholder="Your email" />
                <button className="btn-primary">
                    <span>Subscribe</span> 
                </button>
            </form>
        </div>
    </section>  
    )
}

export default Subscribe