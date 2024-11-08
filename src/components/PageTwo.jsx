import React, { useState } from 'react'
import leftPhone from '../assets/images/phoneleft.svg'
import FeatureBox from './FeatureBox'

export const PageTwo = () => {

    const [featureBox, setFeatureBox] = useState([
        { imageUrl: "../featureIcons/icon-credit-card.svg", imageAlt: "Credit Card", title: "Easy Payments", text: "Id mollis consectetur congue egestas egestas suspendisse blandit justo." },
        { imageUrl: "../featureIcons/icon-cost-statistics.svg", imageAlt: "Cost Statistics", title: "Cost statistics", text: "Id mollis consectetur congue egestas egestas suspendisse blandit justo." },
        { imageUrl: "../featureIcons/icon-regular-cashback.svg", imageAlt: "Cashback", title: "Regular Cashback", text: "Id mollis consectetur congue egestas egestas suspendisse blandit justo." },
        { imageUrl: "../featureIcons/icon-data-security.svg", imageAlt: "Shield", title: "Data Security", text: "Id mollis consectetur congue egestas egestas suspendisse blandit justo." },
        { imageUrl: "../featureIcons/icon-support.svg", imageAlt: "Support", title: "Support 24/7", text: "Id mollis consectetur congue egestas egestas suspendisse blandit justo." },
        { imageUrl: "../featureIcons/icon-standards.svg", imageAlt: "Standards", title: "Top Standards", text: "Id mollis consectetur congue egestas egestas suspendisse blandit justo." },
    ])

  return (

        <section id="pagetwo">
            <div className="container"> 
                <div className="leftphone">
                    <img src={leftPhone} alt="Another phone" />
                </div>
                <div className="content">
                    <div className="features-text"> 
                        <h1>App Features</h1>
                        <p className="text-L">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt quaerat cumque laudantium repudiandae minima rem nam earum eius architecto.</p>
                    </div>
                    <div className="featuresection">

                        {
                            featureBox.map((item, index) => (<FeatureBox key={index} item={item} />))
                        }


                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageTwo