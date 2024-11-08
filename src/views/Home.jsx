import React from 'react'
import Hero from '../components/Hero'
import Brands from '../components/Brands'
import PageTwo from '../components/PageTwo'
import PageThree from '../components/PageThree'
import PageFour from '../components/PageFour'
import Testimonials from '../components/Testimonials'
import Questions from '../components/Questions'
import Subscribe from '../components/Subscribe'


const Home = () => {
  return (
    <> 
        <Hero />
        <Brands />
        <PageTwo />
        <PageThree />
        <PageFour />
        <Testimonials />
        <Questions />
        <Subscribe />
    </>
  )
}

export default Home