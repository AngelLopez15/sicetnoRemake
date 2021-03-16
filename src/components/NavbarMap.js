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
  const [burger, setBurger] = useState(false)

  const firstBar = "first-bar"
  const secondBar = "second-bar"
  const thirdBar = "third-bar"

  const showFirstBar = "show-first-bar"
  const showSecondBar = "show-second-bar"
  const showThirdBar = "show-third-bar"

  const desplegarMenu = () => {
    setMenu(!menu)
    setBurger(!burger)
  }

  return (
    <nav className="md:absolute z-50 flex justify-between w-full py-6 pl-4 md:flex md:flex-col bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 shadow-xl">
      <div className="md:flex md:w-full md:justify-between md:px-4">
        <Link to="/">
          <img src={logoSicetno} alt="Logotipo sicetno" />
        </Link>
        <button class="md:block hidden" onClick={desplegarMenu}>
          <div className="toggle-menu-icon">
            <div className={burger ? showFirstBar : firstBar}></div>
            <div className={burger ? showSecondBar : secondBar}></div>
            <div className={burger ? showThirdBar : thirdBar}></div>
          </div>
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
          <li className="px-4 font-semibold text-xl md:py-4">
            <a target="_blank" rel="noopener noreferrer" href="https://sicetnoblog.medium.com/">Blog</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
