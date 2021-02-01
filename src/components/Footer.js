import React from 'react'

export default function Footer() {
  
  let dateFull = new Date()
  let onlyYear = dateFull.getFullYear()

  return (
    <footer className="w-full py-6">
      <div className="flex justify-around">
        <div>
          <h2>Contáctanos</h2>
          <p>Instituto de Investigaciones Sociales</p>
          <p>Circuito Mario de la Cueva s/n Ciudad de la Investigación en Humanidades, Ciudad Universitaria, C. P. 04510,Coyoacán, México, D. F.</p>
          <ul>
            <li>5622-7400 ext. 280</li>
            <li>proyectosicetno@gmail.com</li>
          </ul>
        </div>
        <div>
          Twitter
        </div>
        <div>
          <h2>Síguenos</h2>
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
