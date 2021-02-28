import React, { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/NavbarMap'
import Mapa from '../components/Mapa'

export default function mapa() {

  return (
    <>
      <Navbar />
      <header className="bg-gray-200 py-24 text-center wallpaper-mapa">
        <h1 className="text-white text-6xl">Mapa interactivo de conflictos</h1>
      </header>
      <main className="container mx-auto px-10 text-justify leading-7">
        <section className="my-10">
          <h2 className="text-moradoSicetno text-4xl font-bold text-center mb-10">Conflictos</h2>
          <div>
            <Mapa />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
