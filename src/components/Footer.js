import React from 'react'

export default function Footer() {
  
  let dateFull = new Date()
  let onlyYear = dateFull.getFullYear()

  return (
    <footer className="w-full py-6 bg-purple-200">
      <div className="w-full flex text-center">
        <div className="w-4/12">
          <h2 className="text-blue-600 text-3xl font-bold mb-6">Contáctanos</h2>
          <p className="text-green-900 text-2xl font-bold mb-6">Instituto de Investigaciones Sociales</p>
          <p className="mb-6">Circuito Mario de la Cueva s/n Ciudad de la Investigación en Humanidades, Ciudad Universitaria, C. P. 04510,Coyoacán, México, D. F.</p>
          <ul className="flex justify-evenly">
            <li>5622-7400 ext. 280</li>
            <li>proyectosicetno@gmail.com</li>
          </ul>
        </div>
        <div className="w-4/12">
          Twitter
        </div>
        <div className="w-4/12">
          <h2 className="text-blue-600 text-3xl font-bold mb-6">Síguenos</h2>
          <ul>
            <li>Youtube</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
      <div>
        LOGOS
      </div>
      <div className="text-center">©Todos los derechos reservados 2014-2015. Sicetno Orgindal {onlyYear}</div>
    </footer>
  )
}
