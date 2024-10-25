import React, { useState } from 'react'
import phoneCall from '../assets/images/phonecall.svg'
import arrowPrimaryClr from '../assets/images/arrowrightprimclr.svg'
import phoneMsg from '../assets/images/phonemsg.svg'
import arrowRightGreen from '../assets/images/arrowrightgreen.svg'
import FaqItem from './FaqItem'

const Questions = () => {

    const [faqItems, setFaqItems] = useState([
        { question: "Is any of my personal information stored in the App?", answer: "Nuncccddddddddd duis id aenean gravida tincidunt eu, tempor ullamcorper.Nuncccddddddddd duis id aenean gravida tincidunt eu, tempor ullamcorper." },
        { question: "Is any of my candy stored in the App?", answer: "Nah." },
        { question: "Is any of my dogs stored in the App?", answer: "Yah." },
        { question: "Is any of my ram stored in the App?", answer: "Kindah." },
        { question: "Is any of my personality stored in the App?", answer: "Hah." },
        { question: "Is any of my humour stored in the App?", answer: "Wha." }
    ])


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
                        faqItems.map((item, index) => (<FaqItem key={index} item={item} />))
                    }

                    </div> 
                </div>
            </div>
        </section>
    )
}

export default Questions