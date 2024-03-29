import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layout/layout'
import natividadGutierrez from '../images/integrantes/natividadGutierrez.png'
import juanaMartinez from '../images/integrantes/juanaMartinez.png'
import sergioSarmiento from '../images/integrantes/sergioSarmiento.png'
import amarildoFigueroa from '../images/integrantes/amarildoFigueroa.png'
import angelLopez from '../images/integrantes/angelLopez.png'
import danielaQuintanar from '../images/integrantes/danielaQuintanar.png'
import danielaRamirez from '../images/integrantes/danielaRamirez.png'
import franciscoBarrena from '../images/integrantes/Francisco.jpg'
import irinaCalderon from '../images/integrantes/irinaCalderon.png'
import irvinCornejo from '../images/integrantes/irvinCornejo.png'
import victorSanchez from '../images/integrantes/victorSanchez.png'
import alejandraMartinez from '../images/integrantes/alejandraMartinez.png'
import raulOlivares from '../images/integrantes/raulOlivares.png'
import rocioCantera from '../images/integrantes/rocioCantera.png'
import beatrizVictoriano from '../images/integrantes/beatrizVictoriano.png'
import SEO from '../components/seo'
import imagenSeo from "../images/logos/sicetno.png"

export default function integrantes() {

  const equipoSociales = [
    {
      foto: natividadGutierrez,
      descripcion: 'Fundadora y responsable del proyecto. Doctora en socialogía por la London School of Economics and Political Science. Investigadora titular del Instituto de Investigaciones Sociales de la Universidad Nacional Autonoma de México.',
      nombre: 'Natividad Gutierrez Chong',
      titulo: 'Doctora en Sociologia',
      cv: 'natividad',
      bg: 'bg-purple-100 rounded-xl p-8 mb-5 mx-2 w-96',
    },
    {
      foto: sergioSarmiento,
      descripcion: 'Doctor en Sociología por la Universidad Nacional Autonoma de México. Investigador titular del Instituto de Investigaciones Sociales, UNAM. Ha realizado diversas publicaciones en torno a la lucha indígena, el indigenismo y la violencia ejercida hacia las comunidades indígenas.',
      nombre: 'Sergio Sarmiento Silva',
      titulo: 'Doctor en Sociologia',
      cv: '',
      bg: 'bg-blue-100 rounded-xl p-8 mb-5 mx-2 w-96',
    },
    {
      foto: juanaMartinez,
      descripcion: 'Doctora en Urbanismo por la Universidad Nacional Autonoma de México. Especialista en temas de territorio, identidad y cultura política indígena.',
      nombre: 'Juana Martínez Resendíz',
      titulo: 'Doctora en Urbanismo',
      cv: '',
      bg: 'bg-purple-100 rounded-xl p-8 mb-5 mx-2 w-96',
    },
    {
      foto: amarildoFigueroa,
      descripcion: '',
      nombre: 'Amarildo Figueroa Valencia',
      titulo: 'Maestro en Estudios Políticos y Sociales, UNAM.',
      cv: '',
      bg: 'bg-blue-100 rounded-xl p-8 mb-5 mx-2 w-96',
    },
    {
      foto: danielaQuintanar,
      descripcion: '',
      nombre: 'Daniela Isabel Quintanar Pérez',
      titulo: 'Maestra en Estudios Latinoamericanos, UNAM.',
      cv: '',
      bg: 'bg-purple-100 rounded-xl p-8 mb-5 mx-2 w-96',
    },
    {
      foto: danielaRamirez,
      descripcion: '',
      nombre: 'Daniela Ramírez Yautentzi',
      titulo: 'Licenciada en Estudios Latinoamericanos, UNAM.',
      cv: '',
      bg: 'bg-blue-100 rounded-xl p-8 mb-5 mx-2 w-96',
    },
    {
      foto: alejandraMartinez,
      descripcion: '',
      nombre: 'Alejandra Monserrat Martínez Merlín',
      titulo: 'Licenciada en Desarrollo y Gestión Intercultural, UNAM.',
      cv: '',
      bg: 'bg-purple-100 rounded-xl p-8 mb-5 mx-2 w-96',
    },
    {
      foto: beatrizVictoriano,
      descripcion: '',
      nombre: 'Beatriz Victoriano López',
      titulo: 'Licenciada en Estudios Latinoamericanos, UNAM.',
      cv: '',
      bg: 'bg-blue-100 rounded-xl p-8 mb-5 mx-2 w-96',
    },
    {
      foto: raulOlivares,
      descripcion: '',
      nombre: 'Raúl Olivares López',
      titulo: 'Licenciado en Sociología, UNAM.',
      cv: '',
      bg: 'bg-purple-100 rounded-xl p-8 mb-5 mx-2 w-96',
    },
    {
      foto: rocioCantera,
      descripcion: '',
      nombre: 'Rocío Cantera Reyes',
      titulo: 'Licenciada en Estudios Latinoamericanos, UNAM.',
      cv: '',
      bg: 'bg-blue-100 rounded-xl p-8 mb-5 mx-2 w-96',
    },
    {
      foto: victorSanchez,
      descripcion: '',
      nombre: 'Víctor Sánchez Medina',
      titulo: 'Licenciado en Sociología, UNAM.',
      cv: '',
      bg: 'bg-purple-100 rounded-xl p-8 mb-5 mx-2 w-96',
    },
    {
      foto: irvinCornejo,
      descripcion: '',
      nombre: 'Irvin Cornejo Romero',
      titulo: 'Licenciado en Sociología, UNAM.',
      cv: '',
      bg: 'bg-blue-100 rounded-xl p-8 mb-5 mx-2 w-96',
    },
    {
      foto: angelLopez,
      descripcion: '',
      nombre: 'Angel Octavio López Cruz',
      titulo: 'Ingeniero en Computación, UNAM.',
      cv: '',
      bg: 'bg-purple-100 rounded-xl p-8 mb-5 mx-2 w-96',
    },
    {
      foto: irinaCalderon,
      descripcion: '',
      nombre: 'Irina Viridiana Calderón Gálvez',
      titulo: 'Licenciada en Diseño y Comunicación Visual, UNAM.',
      cv: '',
      bg: 'bg-blue-100 rounded-xl p-8 mb-5 mx-2 w-96',
    },
    {
      foto: franciscoBarrena,
      descripcion: '',
      nombre: 'Francisco Barrena Nájera',
      titulo: 'Expertos en bases de datos y sistemas de información S.A de C.V.',
      cv: '',
      bg: 'bg-purple-100 rounded-xl p-8 mb-5 mx-2 w-96',
    },
  ]

  const asesores = [
    {
      asesor: 'Genaro Bautista',
      institución: 'Agencia Internacional de Prensa Indígena',
      bg: 'bg-blue-200 rounded-xl p-8 mb-5 mx-2 w-96 text-center',
    },
    {
      asesor: 'Roselia Jiménez',
      institución: 'Diputada Federal Tojolabal',
      bg: 'bg-blue-200 rounded-xl p-8 mb-5 mx-2 w-96 text-center',
    },
    {
      asesor: 'Herber Gracio',
      institución: 'Universidade Federal do Tocantins',
      bg: 'bg-blue-200 rounded-xl p-8 mb-5 mx-2 w-96 text-center',
    },
    {
      asesor: 'Martín Delgado Cultelli',
      institución: 'Charrúa',
      bg: 'bg-blue-200 rounded-xl p-8 mb-5 mx-2 w-96 text-center',
    },
    {
      asesor: 'Camil Girard',
      institución: 'Université du Québec à Chicoutimi',
      bg: 'bg-blue-200 rounded-xl p-8 mb-5 mx-2 w-96 text-center',
    },
    {
      asesor: 'Zenaida Pérez Guttiérrez',
      institución: 'Ayuuk',
      bg: 'bg-blue-200 rounded-xl p-8 mb-5 mx-2 w-96 text-center',
    },
    {
      asesor: 'Araceli Burguete',
      institución: 'CIESAS Sureste',
      bg: 'bg-blue-200 rounded-xl p-8 mb-5 mx-2 w-96 text-center',
    },
    {
      asesor: 'Javier López Sánchez',
      institución: 'Embajador de Paz y Ética-UNESCO',
      bg: 'bg-blue-200 rounded-xl p-8 mb-5 mx-2 w-96 text-center',
    },
    {
      asesor: 'Irasema Gavilán',
      institución: 'FFyL-UNAM',
      bg: 'bg-blue-200 rounded-xl p-8 mb-5 mx-2 w-96 text-center',
    },
    {
      asesor: 'Silvia Soriano',
      institución: 'CIALC-UNAM',
      bg: 'bg-blue-200 rounded-xl p-8 mb-5 mx-2 w-96 text-center',
    },
    {
      asesor: 'Thiago Cavalcante',
      institución: 'Universidade Federal do Dourados',
      bg: 'bg-blue-200 rounded-xl p-8 mb-5 mx-2 w-96 text-center',
    },
    {
      asesor: 'Eduardo Restrepo',
      institución: 'Pontificia Universidad Javeriana',
      bg: 'bg-blue-200 rounded-xl p-8 mb-5 mx-2 w-96 text-center',
    },
    {
      asesor: 'Sibelys Mejía Rodríguez',
      institución: 'Pontificia Universidad Javeriana',
      bg: 'bg-blue-200 rounded-xl p-8 mb-5 mx-2 w-96 text-center',
    },
  ]

  return (
    <Layout>
      <SEO
        title="Integrantes | Sicetno Orgindal - Proyecto de investigación, pueblos indígenas, cultura política indígena"
        description="SICETNO es una plataforma de consulta en línea para el estudio y desarrollo de la cultura política indígena. Instituto de Investigaciones Sociales, UNAM."
        image={imagenSeo}
      />
      <header className="bg-gray-200 py-24 text-center wallpaper-integrantes md:py-12">
        <h1 className="text-moradoSicetno text-6xl md:text-2xl md:font-bold">Integrantes</h1>
      </header>
      <main className="container mx-auto px-10 text-justify leading-7 md:px-5">
        <section className="my-10">
          <h2 className="text-moradoSicetno text-4xl font-bold text-center mb-10">Equipo de trabajo de SICETNO</h2>
          <div className="flex w-full flex-wrap justify-around mt-5">
            {
              equipoSociales.map((item, index) => (
                <figure key={index} className={item.bg}>
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
                        {
                          (item.cv !== '')
                            ?
                            <Link to={`/${item.cv}`}>{item.titulo}</Link>
                            :
                            <p>{item.titulo}</p>
                        }
                      </div>
                    </figcaption>
                  </div>
                </figure>
              ))
            }
          </div>
        </section>
        <section className="mb-10">
          <h2 className="text-moradoSicetno text-4xl font-bold text-center mb-10">Concejo Asesor</h2>
          <div className="flex w-full flex-wrap justify-around mt-5">
            {
              asesores.map((item, index) => (
                <div key={index} className={item.bg}>
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
