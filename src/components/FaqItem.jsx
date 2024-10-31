import React, { useState } from 'react'




const FaqItem = ({item}) => {

    const [showFaqItem, setShowFaqItem] = useState(true)

    const toggleFaqItem = () => {
        setShowFaqItem(!showFaqItem)
    }




  return (
    <div className="accordion-item">                   
        <a className="accordion-link" href="#question1" onClick={toggleFaqItem}><p className="whitetext">{item.title}</p>
            <button className="btn-circle" aria-label="Click for answer">
                <i className="fa-solid fa-chevron-down"></i>
            </button>  
        </a>             
        <div className="answer">
            <div className={`${showFaqItem ? 'expandable' : ''}`}><p>{item.content}</p></div>
        </div>   
    </div> 
    )
}

export default FaqItem