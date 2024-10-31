import React, { useState } from 'react'
import notifBell from '../assets/images/notification.svg'

const Subscribe = () => {

    const [emailData, setEmailData] = useState({ email: '' })
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setEmailData({...emailData, [name]: value})

        if (value.trim() === '') {
            setErrors(prevErrors => ({...prevErrors, [name]: 'This field is required'}))
        } else {
            setErrors(prevErrors => ({...prevErrors, [name]: ''}))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newErrors = {}
            Object.keys(emailData).forEach(field => {
                if (emailData[field].trim() === '') {
                    newErrors[field] = 'You need to enter an email to subscribe'
                }
            })

            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors)
                return
            }
    }

  return (
    <section id="subscribe">
        <div className="container"> 
            <div className="notifbell"> 
                <img src={notifBell} alt="Notification-bell" />
            </div>
            <div className='subscribeText'>
                <h2>Subscribe to our newsletter to stay informed about latest updates</h2>
            </div>
            <form onSubmit={handleSubmit}  id="emailtosub" noValidate> 

                <div className='emailtosub'> 
                <label className="form-label" htmlFor="email"></label>
                <i className="fa-thin fa-envelope envelope"></i>
                <input className="form-input" type="email" name="email" value={emailData.email} onChange={handleChange} id="sub-email" required placeholder="Your email" />
                
                <button className="btn-primary">
                    <span>Subscribe</span> 
                </button>
                </div>

                <p className='invalid-input'>{errors.email && errors.email}</p>

            </form>
        </div>

    </section>  
    )
}

export default Subscribe