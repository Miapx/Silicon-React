import React, { useState, useEffect } from 'react'
import TestimonialItem from './TestimonialItem'


const Testimonials = () => {

    const [testimonialItems, setTestimonialItems] = useState([])

    const fetchData = async () => {
        const res = await fetch ('https://win24-assignment.azurewebsites.net/api/testimonials')
        const data = await res.json()
        setTestimonialItems(data)
    }

    useEffect(() => {
        fetchData()
    }, [])    

     return (
    
        <section id="pagefive">
            <div className="container"> 
                <div className="headtext">
                    <h1>Clients are Loving our app</h1>
                </div>
                <div className="reviews">

                { 
                    testimonialItems.map((item) => (<TestimonialItem key={item.id} item={item}/>))
                }
          
                </div>
            </div>
        </section>
    )
}

export default Testimonials