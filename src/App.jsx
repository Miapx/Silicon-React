import { useState } from 'react'
import './assets/css/style.css'
import './assets/css/responsive.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './views/Home.jsx'
import Features from './views/Features.jsx'
import Contact from './views/Contact.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>

    <BrowserRouter>
      <Header />
      <main> 
        <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </main>
    </BrowserRouter>

    <Footer />

    </>
  )
}

export default App
