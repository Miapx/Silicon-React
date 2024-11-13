import React from 'react'
import quotes from '../assets/images/quotes.svg'
import StarRating from './StarRating'
                        


const TestimonialItem = ({item}) => {


  return (
    
     <div className="reviewbox">
     <img className="quotes" src={quotes} alt="Quotes" />
     <StarRating starRating={item.starRating}/>
        <p className="clientrating text-L">{item.comment}</p>
        <div className="clientinfo">
            <img src={item.avatarUrl} alt="Client profile pic" />
        <div>
            <p className="clientname whitetext">{item.author}</p>
            <p className="clientrole text-S">{item.jobRole}</p>
        </div>

    </div>
    </div>

    
  )
}

export default TestimonialItem