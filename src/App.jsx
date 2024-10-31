import { useState } from 'react'
import './assets/css/style.css'
import './assets/css/responsive.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Brands from './components/Brands'
import { PageTwo } from './components/PageTwo'
import PageThree from './components/PageThree'
import PageFour from './components/PageFour'
import Testimonials from './components/Testimonials'
import Questions from './components/Questions'
import Subscribe from './components/Subscribe'

function App() {

  return (
    <>
    <Header />

    <main>
      <Hero />
      <Brands />
      <PageTwo />
      <PageThree />
      <PageFour />
      <Testimonials />
      <Questions />
      <Subscribe />
    </main>

    <Footer />

    </>
  )
}

export default App
