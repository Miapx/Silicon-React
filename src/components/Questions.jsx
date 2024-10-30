import React, { useState, useEffect } from 'react'
import phoneCall from '../assets/images/phonecall.svg'
import arrowPrimaryClr from '../assets/images/arrowrightprimclr.svg'
import phoneMsg from '../assets/images/phonemsg.svg'
import arrowRightGreen from '../assets/images/arrowrightgreen.svg'
import FaqItem from './FaqItem'

const Questions = () => {

    const [faqItems, setFaqItems] = useState([])
    

    const fetchData = async () => {
        const res = await fetch ('https://win24-assignment.azurewebsites.net/api/faq')
        const data = await res.json()
        setFaqItems(data)
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (

        <section id="FAQ">
            <div className="container">
                <div className="FAQleft">
                    <h2>Any questions? <br /> Check out our FAQs</h2>
                    <p className="text-L">Still have unanswered questions and need to get in touch?</p>
                    <div className="contactus"> 
                        <div className="contactcall">
                            <img src={phoneCall} alt="" />
                            <p className="text-S">Still have questions?</p>
                            <a href="#">
                                <span>Contact us</span>
                                <img src={arrowPrimaryClr} alt="" />
                            </a>
                        </div>

                        <div className="contactmsg">
                            <img src={phoneMsg} alt="" />
                            <p>Dont like phonecalls?</p>
                            <a href="#">
                                <span>Contact us</span>
                                <img src={arrowRightGreen} alt="Arrow pointing right" />
                            </a> 
                        </div>
                    </div>
                </div>

                <div className="FAQright">
                    <div className="accordion">

                    {
                        faqItems.map((item) => (<FaqItem key={item.id} item={item} />))
                    }

                    </div> 
                </div>
            </div>
        </section>
    )
}

export default Questions