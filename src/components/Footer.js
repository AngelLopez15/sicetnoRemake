import React from 'react'
import { Timeline } from 'react-twitter-widgets'
import {ReactComponent as IconFb} from '../images/svg/facebook-f-brands.svg'
import {ReactComponent as IconTw} from '../images/svg/twitter-brands.svg'
import {ReactComponent as IconYt} from '../images/svg/youtube-brands.svg'
import ImageLogos from './ImageLogos'

export default function Footer() {
  
  let dateFull = new Date()
  let onlyYear = dateFull.getFullYear()

  return (
    <footer className="w-full py-6 bg-yellow-200">
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
          <Timeline
            dataSource={{ sourceType: "profile", screenName: "Sicetno" }}
            options={{ width: "400", height: "300" }}
          />
        </div>
        <div className="w-4/12">
          <h2 className="text-blue-600 text-3xl font-bold mb-6">Síguenos</h2>
          <ul className="flex justify-evenly">
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/proyectosicetno/"><IconFb className="w-6"/></a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Sicetno"><IconTw className="w-10"/></a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCMz9Q6NwFCEW1_Up-3n6kMg"><IconYt className="w-12"/></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex w-full justify-evenly my-10">
        <div className="w-28">
          <ImageLogos fileName="logosIISazul.png" alt="Logo IIS" />
        </div>
        <div className="w-28">
          <ImageLogos fileName="logosUNAMazul.png" alt="Logo UNAM" />
        </div>
        <div className="w-28">
          <ImageLogos fileName="logosCONACYT.png" alt="Logo CONACYT" />
        </div>
      </div>
      <div className="text-center">©Todos los derechos reservados 2014-2015. Sicetno Orgindal {onlyYear}</div>
    </footer>
  )
}
