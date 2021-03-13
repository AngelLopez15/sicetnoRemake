import React, { useState } from 'react'
import { Link } from 'gatsby'
import logoSicetno from '../images/sicetno250.png'

export default function Navbar() {

  const pages = [
    {
      title: 'Actualización',
      link: 'actualizacion',
    },
    {
      title: 'Integrantes',
      link: 'integrantes',
    },
    {
      title: 'Objetivo',
      link: 'objetivo',
    },
    {
      title: 'Mapa interactivo',
      link: 'mapa',
    },
    {
      title: 'Publicaciones',
      link: 'publicaciones',
    },
  ]

  const [menu, setMenu] = useState(false)

  const desplegarMenu = () => {
    console.log('Desplegar menu')
    setMenu(!menu)
  }

  return (
    <nav className="md:absolute z-50 flex justify-between w-full py-6 pl-4 md:flex md:flex-col bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 shadow-xl">
      <div className="md:flex md:w-full md:justify-between md:px-4">
        <Link to="/">
          <img src={logoSicetno} alt="Logotipo sicetno" />
        </Link>
        <button class="md:block hidden" onClick={desplegarMenu}>
          BOTON
        </button>
      </div>
      <div className={menu ? "md:block" : "md:hidden" }>
        <ul className="flex justify-end items-center w-full md:flex md:flex-col md:my-5">
          {
            pages.map((item, index) => (
              <li key={index} className="px-4 font-semibold text-xl md:py-4">
                <Link to={`/${item.link}`}>{item.title}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  )
}
