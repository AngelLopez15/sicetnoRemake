import React from 'react'
import Layout from '../layout/layout'

export default function integrantes() {
  return (
    <Layout>
      <header className="bg-red-200 py-24 text-center">
        <h1 className="text-white text-6xl">Integrantes</h1>
      </header>
      <main>
        <section>
          <h2>Equipo de trabajo de SICETNO</h2>
          <div>
            <p>FOTOS DE LOS INTEGRANTES</p>
          </div>
        </section>
        <section>
          <h2>Consejo Asesor</h2>
          <div>
            <div>
              <p>Genaro Bautista, <span>Agencia Internacional de Prensa Indígena</span></p>
            </div>
            <div>
              <p>Roselia Jiménez, <span>Diputada Federal Tojolabal</span></p>
            </div>
            <div>
              <p>Herber Gracio, <span>Universidade Federal do Tocantins</span></p>
            </div>
            <div>
              <p>Martín Delgado Cultelli, <span>Charrúa</span></p>
            </div>
            <div>
              <p>Camil Girard, <span>Université du Québec à Chicoutimi</span></p>
            </div>
            <div>
              <p>Zenaida Pérez Guttiérrez, <span>Ayuuk</span></p>
            </div>
            <div>
              <p>Araceli Burguete, <span>CIESAS Sureste</span></p>
            </div>
            <div>
              <p>Javier López Sánchez,<span>Embajador de Paz y Ética-UNESCO</span></p>
            </div>
            <div>
              <p>Irasema Gavilán, <span>FFyL-UNAM</span></p>
            </div>
            <div>
              <p>Silvia Soriano, <span>CIALC-UNAM</span></p>
            </div>
            <div>
              <p>Thiago Cavalcante, <span>Universidade Federal do Dourados</span></p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
