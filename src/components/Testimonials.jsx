import React from 'react'
import quotes from '../assets/images/quotes.svg'
import fourStars from '../assets/images/rating4.svg'
import fiveStars from '../assets/images/rating5.svg'
import fanny from '../assets/images/Fanny.svg'
import albert from '../assets/images/Albert.svg'


const Testimonials = () => {
     return (
    
        <section id="pagefive">
            <div className="container"> 
                <div className="headtext">
                    <h1>Clients are Loving our app</h1>
                </div>
                <div className="reviews">
                    <div className="reviewbox">
                        <img className="quotes" src={quotes} alt="Quotes" />
                        <img className="ratings" src={fourStars} alt="4 star rating" />
                        <p className="clientrating text-L">Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
                        <div className="clientinfo">
                            <img src={fanny} alt="Client profile pic" />
                            <div>
                                <p className="clientname whitetext">Fannie Summers</p>
                                <p className="clientrole text-S">Designer</p>
                            </div>
                        </div>
                    </div>

                    <div className="reviewbox">
                        <img className="quotes" src={quotes} alt="Quotes" />
                        <img className="ratings" src={fiveStars} alt="5 star rating" />
                        <p className="clientrating text-L">Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
                        <div className="clientinfo">
                            <img src={albert} alt="Client profile pic" />
                            <div>
                                <p className="clientname whitetext">Albert Flores</p>
                                <p className="clientrole text-S">Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials