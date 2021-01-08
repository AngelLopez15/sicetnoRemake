import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {

  const pages = [
    {
      title: 'Actualización'
    },
    {
      title: 'Integrantes'
    },
    {
      title: 'Objetivo'
    },
    {
      title: 'Mapa interactivo'
    },
    {
      title: 'Publicaciones'
    },
  ]

  return (
    <nav className="flex w-full">
      <p>LOGO</p>
      <ul className="flex justify-end w-full">
        {
          pages.map((item, index) => (
            <li className="px-4">
              {item.title}
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
