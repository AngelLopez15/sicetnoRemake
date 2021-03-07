import React from 'react'
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

  return (
    <nav className="z-50 flex justify-between w-full py-6 pl-4 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 shadow-xl sticky top-0">
      <div>
        <Link to="/">
          <img src={logoSicetno} alt="Logotipo sicetno" />
        </Link>
        {/* <button class="hamburger block sm:hidden focus:outline-none">
          <span class="hamburger__top-bun"></span>
          <span class="hamburger__bottom-bun"></span>
        </button> */}
      </div>
      <ul className="flex justify-end items-center w-full">
        {
          pages.map((item, index) => (
            <li key={index} className="px-4 font-semibold text-xl">
              <Link to={`/${item.link}`}>{item.title}</Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
