import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import About from '../components/About'
import Trainer from '../components/Trainer'
import ContactHeader from '../components/ContactHeader'
import ContactForm from '../components/ContactForm'

export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <Hero />
      <About />
      <Trainer />
      <ContactHeader />
      <ContactForm />
      <Footer />
    </>
  )
}
