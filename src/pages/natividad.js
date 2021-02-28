import React from 'react'
import Layout from '../layout/layout'

export default function natividad() {

  const lineas = [
    {
      'text': 'Nacionalismo'
    },
    {
      'text': 'Cultura política indígena'
    },
    {
      'text': 'Multiculturalismo'
    },
    {
      'text': 'Interculturalidad'
    },
    {
      'text': 'Identidad'
    },
    {
      'text': 'Etnicidad'
    },
    {
      'text': 'Etnicidad'
    }
  ]

  return (
    <Layout>
      <header>
        <h1>Natividad Gutiérrez Chong</h1>
        <p>
          Maestra y doctora en Sociología por la London School of Economics and Political Science, Universidad de Londres. Profesora e investigadora titular del Instituto de Investigaciones Sociales de la Universidad Nacional Autónoma de México. Ha coordinado desde 1983 más de veinte proyectos de investigación sobre nacionalismos y etnicidades en la República Popular China, México, Guatemala, Reino Unido, Bolivia y Ecuador. Es autora de numerosas publicaciones sobre conflictos étnicos, nacionalismos y multiculturalismo. Imparte docencia en la Maestría en Desarrollo Regional del Instituto Dr. José María Luis Mora; en el Instituto de Investigaciones Antropológicas y la Facultad de Filosofía y Letras así como en la Facultad de Ciencias Políticas y Sociales, UNAM.
          </p>
        <p>
          Miembro del Sistema Nacional de Investigadores Nivel III y miembro de la Academia Mexicana de Ciencias desde 2002.
          </p>
      </header>
      <main>
        <section>
          <h2>Líneas de Investigacion</h2>
          <ul>
            {
              lineas.map((item, index) => (
                <li key={index}>
                  {item.text}
                </li>
              ))
            }
          </ul>
        </section>
      </main>
    </Layout>
  )
}
