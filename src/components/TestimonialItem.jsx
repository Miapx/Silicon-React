import React from 'react'
import quotes from '../assets/images/quotes.svg'
import ratingFive from '../assets/images/rating5.svg'
// Importing a static picture for ratings that will be looped out twice, since the api doesn't return ratings. Checked with Therese and was OK to do so. 
                        


const TestimonialItem = ({item}) => {


  return (
    
     <div className="reviewbox">
     <img className="quotes" src={quotes} alt="Quotes" />
        <img className="ratings" src={ratingFive} alt="rating" />
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