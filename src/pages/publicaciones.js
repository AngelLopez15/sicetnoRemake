import React from 'react'
import Layout from '../layout/layout'

export default function publicaciones() {

  const libros = [
    {
      portada: 'imagen 1',
      titulo: 'Territorios y reconocimiento constitucional',
      url: '/',
    },
    {
      portada: 'imagen 2',
      titulo: 'Violencia y activismo politico',
      url: '/',
    },
    {
      portada: 'imagen 3',
      titulo: 'Cultura política indígena',
      url: '/',
    },
    {
      portada: 'imagen 4',
      titulo: 'Revista Mexicana de Sociologia',
      url: '/',
    },
  ]

  return (
    <Layout>
      <header className="bg-red-200 py-24 text-center">
        <h1 className="text-white text-6xl">Publicaciones</h1>
      </header>
      <main className="container mx-auto px-10 text-justify leading-7">
        <section className="my-10">
          <h2 className="text-moradoSicetno text-4xl text-center mb-10">Con la base de datos CETNA. Conflictos étnicos y nacionalismos en las Américas.</h2>
          <p className="mb-6">Se escribieron y coordinaron dos libros que exponen los resultados sobre la conflictividad étnica de América Latina. Los conflictos étnicos son debido a afectación de intereses en los territorios y no a proyectos de secesión.</p>
          <p className="mb-6"><span>Natividad Gutiérrez Chong (Coordinadora)</span>, Etnicidad y conflicto en las Américas, Territorios y reconocimiento constitucional, Volumen I, Instituto de Investigaciones Sociales, UNAM, México, 2013. Natividad Gutiérrez Chong (Coordinadora), Etnicidad y conflicto en las Américas, Violencia y Activismo político, Volumen II, Instituto de Investigaciones Sociales, UNAM, México, 2013.</p>
          <p className="mb-6">Ambos libros reseñados por Rodolfo Stavenhagen en la Revista Mexicana de Sociología.</p>
          <p className="mb-6">Con la base de datos ORGINDAL. Organizaciones indígenas de América Latina.</p>
          <p className="mb-6">El resultado principal de esta base es una obra que demuestra la diversidad de la cultura política indígena en México, Chile, Ecuador y Bolivia. Se llevaron a cabo entrevistas en esos países a dirigentes, fundadores y activistas, mujeres y hombres, con identidades étnicas diversas y proyectos políticos propios.</p>
          <p className="mb-6">Natividad Gutiérrez Chong, Juana Martínez, Francy Sará, Cultura política indígena. Bolivia, Ecuador, Chile, México, Instituto de Investigaciones Sociales, UNAM, 2015.</p>
        </section>
        <section className="mb-10">
          <h2 className="text-moradoSicetno text-4xl text-center mb-10">Recursos</h2>
          <div>
            {
              libros.map((item, index) => (
                <div key={index}>
                  <p>{item.titulo}</p>
                </div>
              ))
            }
          </div>
        </section>
      </main>
    </Layout>
  )
}
