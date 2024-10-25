import React from 'react'
import notifBell from '../assets/images/notification.svg'

const Subscribe = () => {
  return (
    <section id="subscribe">
        <div class="container"> 
            <div class="notifbell"> 
                <img src={notifBell} alt="Notification-bell" />
            </div>
            <div>
                <h2>Subscribe to our newsletter to stay informed about latest updates</h2>
            </div>
            <form class="emailtosub" id="emailtosub"> 
                <label class="form-label" for="email"></label>
                <i class="fa-thin fa-envelope envelope"></i>
                <input class="form-input" type="email" name="email" id="sub-email" placeholder="Your email" />
                <button class="btn-primary">
                    <span>Subscribe</span> 
                </button>
            </form>
        </div>
    </section>  
    )
}

export default Subscribe