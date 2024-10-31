import React from 'react'
import P3Phone1 from '../assets/images/phonepage3-1.svg'
import P3Phone2 from '../assets/images/phonepage3-2.svg'
import P3Phone3 from '../assets/images/phonepage3-3.svg'
import P3Phone4 from '../assets/images/4 → 04-app-showcase-screens.png.svg'

const PageThree = () => {
  return (
    <section id="pagethree">
        <div className="container"> 
            <h1>How Does It Work?</h1>
                <div className="carousel">
                    <img id="phone-1" src={P3Phone1} alt="Phone" />
                    <img id="phone-2" src={P3Phone2} alt="Phone" />
                    <img id="phone-3" src={P3Phone3} alt="Phone" />
                    <img id="phone-4" src={P3Phone4} alt="Phone" />
                </div>
                <div className="undercarousel">
                    <h2>Latest transaction history</h2>
                    <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum. </p>
                </div>     
        </div>
    </section>
    )
}

export default PageThree