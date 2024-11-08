import React from 'react'
import checkMark from '../assets/images/checkmark.svg'
import arrowRight from '../assets/images/arrowright.svg'
import moneyTransfer from '../assets/images/moneytransfer.svg'
import moneyPayment from '../assets/images/moneypayment.svg'
import creditCard from '../assets/images/icon-credit-card.svg'
import cashBack from '../assets/images/icon-regular-cashback.svg'


const PageFour = () => {
  return (
    
    <section id="pagefour">
        <div className="container">
            <div className="moneytransfertext"> 
                <h2>Make your money transfer simple and clear</h2>
                <ul>
                    <li>
                        <img className="checkmark" src={checkMark} alt="Checkmark" />Banking transactions are free for you
                    </li>
                    <li>
                        <img className="checkmark" src={checkMark} alt="Checkmark" />No monthly cash commission
                    </li>
                    <li>
                        <img className="checkmark" src={checkMark} alt="Checkmark" />Manage payments and transactions online
                    </li>
                </ul>
                <a href="#" aria-label="Learn more about money transfers" className="btn-primary">
                <span>Learn more</span> 
                <img src={arrowRight} alt="Arrow pointing right" />   
                </a>
            </div>

            <div className="imagestransfer">
                <img className="imagep4" src={moneyTransfer} alt="Phone Image" />
            </div> 
            <div className="imagespayment">
                <img className="imagep4" src={moneyPayment} alt="Phone Image" />
            </div>

            <div className="moneypaymenttext">
                <h2>Receive payment from international bank details</h2>
                <div className="features">
                    <div className="featurebox">
                        <img className="icon" src={creditCard} alt="Credit Card-icon" />
                        <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                    </div>
                    <div className="featurebox">
                        <img className="icon" src={cashBack} alt="Cashback-icon" />
                        <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                    </div>
                </div>

                <a href="#" aria-label="Learn more about international bank payments" className="btn-primary">
                    <span>Learn more</span> 
                    <img src={arrowRight} alt="Arrow pointing right" />   
                </a>
            </div>
        </div>
    </section>
    )
}

export default PageFour