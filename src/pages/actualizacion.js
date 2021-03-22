import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layout/layout'
import SEO from '../components/seo'
import imagenSeo from "../images/logos/sicetno.png"

export default function actualizacion() {
  return (
    <Layout>
      <SEO
        title="Actualizacion | Sicetno Orgindal - Proyecto de investigación, pueblos indígenas, cultura política indígena"
        description="SICETNO es una plataforma de consulta en línea para el estudio y desarrollo de la cultura política indígena. Instituto de Investigaciones Sociales, UNAM."
        image={imagenSeo}
      />
      <header className="bg-gray-200 py-24 text-center wallpaper-actualizacion md:pt-32">
        <h1 className="text-white text-6xl">Sobre la actualización</h1>
      </header>
      <main className="container mx-auto px-10 md:px-5 text-justify leading-7">
        <section className="my-10">
          <h2 className="text-moradoSicetno text-4xl font-bold text-center mb-10">Nota metodológica</h2>
          <p className="mb-6">En el año 2019 se inició la actualización de la base de datos del Sistema de Consulta de Organizaciones Indígenas y Conflictos Étnicos en las Américas. Específicamente, en los conflictos étnicos en las regiones de Norteamérica, Centroamérica y Sudamérica, incluyendo en esta ocasión también casos afrodescendientes.</p>
          <p className="mb-6">Para realizar la actualización de la información contenida en la plataforma digital se llevó a cabo una investigación echando mano de diversas fuentes: hemerográficas, comunicados de las organizaciones indígenas, de defensores de derechos humanos y organizaciones ecologistas, bases de datos especializadas, tesis y artículos académicos. Además, fue de utilidad revisar los protocolos de la Corte Interamericana de Derechos Humanos, la Declaración de las Naciones Unidas sobre derechos de los Pueblos Indígenas, así como las normas y estándares internacionales existentes en materia de derechos indígenas. Las bases de datos que se consultaron para buscar y revisar información fueron: EJATLAS Environmental Justice Atlas, OCMAL Observatorio de Conflictos Mineros en América Latina y Geo Comunes. Se consultaron sitios que muestran mapas de los diversos proyectos (minería, fracking, hidrocarburos, hidroeléctricas, principalmente) que están surgiendo en México, ejemplos de estos sitios son: CartoCrítica, Mapa de concesiones mineras en México de la Agencia Subversiones, Mapa general de conflictos socio-ambientales del Observatorio Socioambiental de la Unión de Científicos Comprometidos con la Sociedad y del Centro de Ciencias de la Complejidad de la UNAM.</p>
          <p className="mb-6">Se dio seguimiento a las principales problemáticas actuales en las que los pueblos indígenas y afrodescendientes tienen un papel protagónico y que ya eran parte de la base de datos que se desarrolló hasta el año 2012. Se ha observado en esta investigación cualitativa, que la defensa del territorio es el común denominador en los procesos de organización de carácter étnico y afrodescendiente pues se resisten a la penetración de megaproyectos mineros y de energías alternativas en territorios sagrados y habitados por ellos ancestralmente. Es por eso que el cruce de los ejes analíticos I,II, III y V es predominante, los conflictos relacionados con territorio y recursos naturales son los que prevalecen. Ante ello, vemos también que los pueblos indígenas y afrodescendientes están en un proceso constante de cambio y organizados en la defensa de su territorio en distintos niveles.</p>
          <p className="mb-6">La búsqueda, identificación y actualización de los conflictos en las Américas permite observar y analizar las causas así como el desarrollo de las diferentes problemáticas, también proporciona información para el estudio de la relación que existe entre el territorio desde la concepción indígena, el aprovechamiento de los recursos naturales y el interés de las empresas nacionales, transnacionales y el Estado por la implementación de proyectos  bajo la óptica de desarrollo y en algunos casos de creación de empleos. También visibiliza la deuda histórica de respeto a la soberanía y reconocimiento de los derechos individuales y colectivos de los pueblos indígenas y afrodescendientes.</p>
          <p className="mb-6">En este sentido, también se visibilizan las estrategias de los pueblos originarios y afrodescendientes y el cambio gradual en su cultura política, entendiendo que son actores dinámicos que echan mano de diversos instrumentos legales, en su mayoría de carácter internacional, y que han sido fundamentales en la supervivencia de sus usos y costumbres, el usufructo y resguardo de su territorio frente a la dinámica de despojo de los capitales y los impactos de los diversos proyectos en el contexto neoliberal.</p>
          <p className="mb-6">Finalmente, es necesario puntualizar los presupuestos operativos que llevaron a la identificación de los conflictos en la actualización de 2021.</p>
          <ol className="mb-6">
            <li className="list-decimal">Organización política</li>
            <li className="list-decimal">Comunicación con el Estado</li>
            <li className="list-decimal">Documentación del proceso</li>
          </ol>
          <p className="mb-6">Lo anterior permite focalizar la identificación dentro de la malla de conflictos que surgen de modo incipiente o coyuntural asociado a acontecimientos políticos de otro ámbito que no sea el étnico o afrodescendiente.</p>
          <p className="mb-6">Asimismo, una vez identificado el conflicto, se delimita la zona o región, para su tipificación de acuerdo con los ejes de la investigación y proceder a su sistematización. En cada caso se eligió una localidad o cabecera municipal estratégica para notificar el punto de ubicación dentro del mapa georreferencial.</p>
          <div className="mt-10 flex justify-evenly md:flex md:flex-col">
            <button className="bg-naranjaSicetno text-white py-2 px-10 rounded-3xl shadow-lg transition duration-500 ease-in-out hover:bg-moradoSicetno transform hover:-translate-y-1 hover:scale-110 md:mb-10">
              <Link to="/mapa">Ir al mapa interactivo</Link>
            </button>
            <button className="bg-verdeSicetno text-white py-2 px-10 rounded-3xl shadow-lg transition duration-500 ease-in-out hover:bg-moradoSicetno transform hover:-translate-y-1 hover:scale-110"><a target="_blank" rel="noopener noreferrer" href="https://www.sicetno.org/ords/f?p=2000100:1::::::">Ir a la base de datos</a></button>
          </div>
        </section>
      </main>
    </Layout>
  )
}
