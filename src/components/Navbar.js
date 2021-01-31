import React from 'react'
import { Link } from 'gatsby'

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
    <nav className="flex w-full py-6"> 
      <ul className="flex justify-end w-full">
        {
          pages.map((item, index) => (
            <li key={index} className="px-4">
              <Link to={`/${item.link}`}>{item.title}</Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
