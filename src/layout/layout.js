import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Layout(props) {
  
  const {children} = props
  
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
