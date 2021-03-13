import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/NavbarMap'
import Mapa from '../components/Mapa'

export default function mapa() {

  return (
    <>
      <Navbar />
      <header className="bg-gray-200 py-24 text-center wallpaper-mapa md:pt-32">
        <h1 className="text-white text-6xl">Mapa interactivo de conflictos</h1>
      </header>
      <main className="container mx-auto px-10 text-justify leading-7 md:px-2">
        <section className="my-10">
          <h2 className="text-moradoSicetno text-4xl font-bold text-center mb-10">Conflictos</h2>
          <div>
            <Mapa />
          </div>
        </section>
        <section className="m-12 md:m-2">
          <h2 className="text-moradoSicetno text-4xl font-bold text-center mb-10">Semáforo de conflictos</h2>
          <div>
            <ul className="flex justify-around md:flex md:flex-col">
              <li className="flex w-96 flex-wrap md:w-full md:justify-center items-center md:mb-4">
                <div className="bg-green-400 rounded-full w-5 h-5 p-5 m-4"></div>
                <p className="font-semibold">Identifica los conflictos que tienen algún tipo de resolución, y principalmente se llegó a esta sin violencia.</p>
              </li>
              <li className="flex w-96 flex-wrap md:w-full md:justify-center items-center md:mb-4">
                <div className="bg-yellow-400 rounded-full w-5 h-5 p-5 m-4"></div>
                <p className="font-semibold">Identifica los conflictos que están vigentes o no se ha llegado a ninguna resolución, pero que presentan algún tipo de represión sin asesinatos.</p> 
              </li>
              <li className="flex w-96 flex-wrap md:w-full md:justify-center items-center md:mb-4">
                <div className="bg-red-400 rounded-full w-5 h-5 p-5 mr-4"></div>
                <p className="font-semibold">Identifica los conflictos donde hubo asesinatos, considerada esta como el más alto nivel de violencia.</p>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
