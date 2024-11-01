import React from 'react'
import quotes from '../assets/images/quotes.svg'
import ratingFour from '../assets/images/rating4.svg'
import ratingFive from '../assets/images/rating5.svg'
                        


const TestimonialItem = ({item}) => {

// res[0].item.starRating = {ratingFour}
  // item[0].unshift(item.starRating = {ratingFour})

  return (
    
     <div className="reviewbox">
     <img className="quotes" src={quotes} alt="Quotes" />
        <img className="ratings" src={item.starRating} alt="rating" />
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