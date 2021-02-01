import React from 'react'
import Layout from '../layout/layout'

export default function integrantes() {

  const asesores = [
    { asesor: 'Genaro Bautista',
      institución: 'Agencia Internacional de Prensa Indígena'
    },
    {
      asesor: 'Roselia Jiménez',
      institución: 'Diputada Federal Tojolabal',
    },
    {
      asesor: 'Herber Gracio',
      institución: 'Universidade Federal do Tocantins',
    },
    {
      asesor: 'Martín Delgado Cultelli',
      institución: 'Charrúa',
    },
    {
      asesor: 'Camil Girard',
      institución: 'Université du Québec à Chicoutimi',
    },
    {
      asesor: 'Zenaida Pérez Guttiérrez',
      institución: 'Ayuuk',
    },
    {
      asesor: 'Araceli Burguete',
      institución: 'CIESAS Sureste',
    },
    {
      asesor: 'Javier López Sánchez',
      institución: 'Embajador de Paz y Ética-UNESCO',
    },
    {
      asesor: 'Irasema Gavilán',
      institución: 'FFyL-UNAM',
    },
    {
      asesor: 'Silvia Soriano',
      institución: 'CIALC-UNAM',
    },
    {
      asesor: 'Thiago Cavalcante',
      institución: 'Universidade Federal do Dourados',
    },
  ]

  return (
    <Layout>
      <header className="bg-gray-200 py-24 text-center wallpaper-integrantes">
        <h1 className="text-white text-6xl">Integrantes</h1>
      </header>
      <main className="container mx-auto px-10 text-justify leading-7">
        <section className="my-10">
          <h2 className="text-moradoSicetno text-4xl text-center mb-10">Equipo de trabajo de SICETNO</h2>
          <div>
            <p>FOTOS DE LOS INTEGRANTES</p>
          </div>
        </section>
        <section className="mb-10">
          <h2 className="text-moradoSicetno text-4xl text-center mb-10">Consejo Asesor</h2>
          <div>
            {
              asesores.map((item, index)=>(
                <div key={index}>
                  <p>{item.asesor}, <span>{item.institución}</span></p>
                </div>
              ))
            }
          </div>
        </section>
      </main>
    </Layout>
  )
}
