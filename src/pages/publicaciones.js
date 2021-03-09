import React from 'react'
import Layout from '../layout/layout'
import ImageLogos from '../components/ImageLogos'
import territorios from '../doc/etnicidad_vol1.pdf'
import violencia from '../doc/etnicidad_vol2.pdf'
import cultura from '../doc/cultura.pdf'
import revista from '../doc/RodolfoStavenhagen.pdf'

export default function publicaciones() {

  const libros = [
    {
      portada: 'territorios_reconocimientos.png',
      alt: 'Territorios y reconocimiento constitucional',
      titulo: 'Territorios y reconocimiento constitucional',
      url: territorios,
    },
    {
      portada: 'violencia_activismo.png',
      alt: 'Violencia y activismo politico',
      titulo: 'Violencia y activismo politico',
      url: violencia,
    },
    {
      portada: 'cultura_politica.jpeg',
      alt: 'Cultura política indígena',
      titulo: 'Cultura política indígena',
      url: cultura,
    },
    {
      portada: 'revista_mexicana.jpeg',
      alt: 'Revista Mexicana de Sociologia',
      titulo: 'Revista Mexicana de Sociologia',
      url: revista,
    },
  ]

  return (
    <Layout>
      <header className="bg-gray-200 py-24 text-center wallpaper-publicaciones">
        <h1 className="text-white text-6xl">Publicaciones</h1>
      </header>
      <main className="container mx-auto px-10 md:px-5 text-justify leading-7">
        <section className="my-10">
          <h2 className="text-moradoSicetno text-4xl font-bold text-center mb-10">Con la base de datos CETNA. Conflictos étnicos y nacionalismos en las Américas.</h2>
          <p className="mb-6">Se escribieron y coordinaron dos libros que exponen los resultados sobre la conflictividad étnica de América Latina. Los conflictos étnicos son debido a afectación de intereses en los territorios y no a proyectos de secesión.</p>
          <p className="mb-6"><span>Natividad Gutiérrez Chong (Coordinadora)</span>, Etnicidad y conflicto en las Américas, Territorios y reconocimiento constitucional, Volumen I, Instituto de Investigaciones Sociales, UNAM, México, 2013. Natividad Gutiérrez Chong (Coordinadora), Etnicidad y conflicto en las Américas, Violencia y Activismo político, Volumen II, Instituto de Investigaciones Sociales, UNAM, México, 2013.</p>
          <p className="mb-6">Ambos libros reseñados por Rodolfo Stavenhagen en la Revista Mexicana de Sociología.</p>
          <p className="mb-6">Con la base de datos ORGINDAL. Organizaciones indígenas de América Latina.</p>
          <p className="mb-6">El resultado principal de esta base es una obra que demuestra la diversidad de la cultura política indígena en México, Chile, Ecuador y Bolivia. Se llevaron a cabo entrevistas en esos países a dirigentes, fundadores y activistas, mujeres y hombres, con identidades étnicas diversas y proyectos políticos propios.</p>
          <p className="mb-6">Natividad Gutiérrez Chong, Juana Martínez, Francy Sará, Cultura política indígena. Bolivia, Ecuador, Chile, México, Instituto de Investigaciones Sociales, UNAM, 2015.</p>
        </section>
        <section className="mb-10">
          <h2 className="text-moradoSicetno text-4xl font-bold text-center mb-10">Recursos</h2>
          <div className="flex flex-wrap justify-between">
            {
              libros.map((item, index) => (
                <div key={index} className="w-80 mx-4 my-4" >
                  <ImageLogos fileName={item.portada} alt={item.alt} />
                  <p className="text-center font-semibold my-2">{item.titulo}</p>
                  <div className="flex justify-center">
                    <a className="bg-moradoSicetno text-white py-2 px-10 rounded-3xl shadow-lg transition duration-500 ease-in-out hover:bg-verdeSicetno transform hover:-translate-y-1 hover:scale-110" target="_blank" rel="noopener noreferrer" href={item.url}>Descargar</a>
                  </div>
                </div>
              ))
            }
          </div>
        </section>
      </main>
    </Layout>
  )
}
