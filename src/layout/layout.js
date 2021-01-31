import React from 'react'
import Navbar from '../components/Navbar'

export default function Layout(props) {
  
  const {children} = props
  
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
