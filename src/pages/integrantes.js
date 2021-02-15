import React from 'react'
import Layout from '../layout/layout'
import natividadGutierrez from '../images/integrantes/natividadGutierrez.png'
import juanaMartinez from '../images/integrantes/juanaMartinez.png'
import sergioSarmiento from '../images/integrantes/sergioSarmiento.png'
import amarildoFigueroa from '../images/integrantes/amarildoFigueroa.png'
import angelLopez from '../images/integrantes/angelLopez.png'
import danielaQuintanar from '../images/integrantes/danielaQuintanar.png'
import danielaRamirez from '../images/integrantes/danielaRamirez.png'
import garryLawton from '../images/integrantes/garryLawton.png'
import irinaCalderon from '../images/integrantes/irinaCalderon.png'
import irvinCornejo from '../images/integrantes/irvinCornejo.png'
import victorSanchez from '../images/integrantes/victorSanchez.png'

export default function integrantes() {

  const equipoSociales = [
    {
      foto: natividadGutierrez,
      descripcion: 'Fundadora y responsable del proyecto. Doctora en socialogía por la London School of Economics and Political Science. Investigadora titular del Instituto de Investigaciones Sociales de la Universidad Nacional Autonoma de México.',
      nombre: 'Natividad Gutierrez Chong',
      titulo: 'Doctora en Sociologia',
    },
    {
      foto: sergioSarmiento,
      descripcion: 'Doctor en Sociología por la Universidad Nacional Autonoma de México. Investigador titular del Instituto de Investigaciones Sociales, UNAM. Ha realizado diversas publicaciones en torno a la lucha indígena, el indigenismo y la violencia ejercida hacia las comunidades indígenas.',
      nombre: 'Sergio Sarmiento Silva',
      titulo: 'Doctora en Sociologia',
    },
    {
      foto: juanaMartinez,
      descripcion: 'Doctora en Urbanismo por la Universidad Nacional Autonoma de México. Especialista en temas de territorio, identidad y cultura política indígena.',
      nombre: 'Juana Martínez Resendíz',
      titulo: 'Doctora en Urbanismo',
    },
    {
      foto: amarildoFigueroa,
      descripcion: '',
      nombre: 'Amarildo Figueroa Valencia',
      titulo: 'Licenciado en Sociología, UNAM.',
    },
    {
      foto: danielaQuintanar,
      descripcion: '',
      nombre: 'Daniela Isabel Quintanar Pérez',
      titulo: 'Maestra en Estudios Latinoamericanos, UNAM.',
    },
    {
      foto: danielaRamirez,
      descripcion: '',
      nombre: 'Daniela Ramírez Yautentzi',
      titulo: 'Licenciada en Estudios Latinoamericanos, UNAM.',
    },
    {
      foto: victorSanchez,
      descripcion: '',
      nombre: 'Víctor Sánchez Medina',
      titulo: 'Licenciado en Sociología, UNAM.',
    },
    {
      foto: irvinCornejo,
      descripcion: '',
      nombre: 'Irvin Cornejo Romero',
      titulo: 'Licenciado en Sociología, UNAM.',
    },
    {
      foto: angelLopez,
      descripcion: '',
      nombre: 'Angel Octavio López Cruz',
      titulo: 'Ingeniero en Computación, UNAM.',
    },
    {
      foto: irinaCalderon,
      descripcion: '',
      nombre: 'Irina Viridiana Calderón Gálvez',
      titulo: 'Licenciada en Diseño y Comunicación Visual, UNAM.',
    },
    {
      foto: garryLawton,
      descripcion: '',
      nombre: 'Garry Lawton',
      titulo: 'Diseño y programación de la base de datos.',
    },
  ]

  const asesores = [
    { 
      asesor: 'Genaro Bautista',
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
        <h1 className="text-moradoSicetno text-6xl">Integrantes</h1>
      </header>
      <main className="container mx-auto px-10 text-justify leading-7">
        <section className="my-10">
          <h2 className="text-moradoSicetno text-4xl font-bold text-center mb-10">Equipo de trabajo de SICETNO</h2>
          <div className="flex w-full flex-wrap">
            {
              equipoSociales.map((item, index) => (
                <figure key={index} className="bg-red-100 rounded-xl p-8 mb-5 mx-2 w-96">
                  <img className="w-32 h-32 rounded-full mx-auto" src={item.foto} alt="Doctora Natividad" width="384" height="512" />
                  <div className="pt-6 text-center space-y-4">
                    {
                      (item.descripcion !== '')
                      ? 
                      <blockquote>
                        <p className="font-medium text-justify">
                          {item.descripcion}
                        </p>
                      </blockquote>
                      :
                      null
                    }
                    <figcaption>
                      <div className="text-green-600 text-lg font-semibold">
                        <h3>{item.nombre}</h3>
                      </div>
                      <div className="text-yellow-500 text-lg font-semibold">
                        <p>{item.titulo}</p>
                      </div>
                    </figcaption>
                  </div>
                </figure>
              ))
            }
          </div>
        </section>
        <section className="mb-10">
          <h2 className="text-moradoSicetno text-4xl font-bold text-center mb-10">Consejo Asesor</h2>
          <div className="flex w-full flex-wrap">
            {
              asesores.map((item, index)=>(
                <div key={index} className="bg-red-100 rounded-xl p-8 mb-5 mx-2 w-96 text-center">
                  <h3 className="text-green-600 text-lg font-semibold">{item.asesor}</h3>
                  <p className="text-yellow-500 text-lg font-semibold">{item.institución}</p>
                </div>
              ))
            }
          </div>
        </section>
      </main>
    </Layout>
  )
}
