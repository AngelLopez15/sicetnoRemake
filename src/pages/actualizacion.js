import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layout/layout'

export default function actualizacion() {
  return (
    <Layout>
      <header className="bg-red-200 py-24 text-center">
        <h1 className="text-white text-6xl">Sobre la actualización</h1>
      </header>
      <main className="container mx-auto px-10 text-justify leading-7">
        <section className="my-10">
          <h2 className="text-moradoSicetno text-4xl text-center mb-10">Nota metodológica</h2>
          <p className="mb-6">En el tercer trimestre del año 2018 se comenzó a trabajar en la actualización de la base de datos del Sistema de Consulta de Organizaciones Indígenas y Conflictos Étnicos en las Américas, específicamente en lo correspondiente a los conflictos étnicos en México.</p>
          <p className="mb-6">Para realizar la actualización de la información contenida en la plataforma digital se realizó una investigación echando mano de diversas fuentes: hemerográficas, comunicados de las organizaciones indígenas, de defensores de derechos humanos y organizaciones ecologistas, bases de datos especializadas, tesis y artículos académicos. Además, fue de utilidad revisar los protocolos de la Corte Interamericana de Derechos Humanos, la Declaración de las Naciones Unidas sobre derechos de los pueblos indígenas y revisar las normas y estándares internacionales existentes en materia de derechos indígenas. Las bases de datos que se emplearon para buscar y revisar información fueron: EJATLAS Environmental Justice Atlas, OCMAL Observatorio de Conflictos mineros en América Latina y Geo Comunes. Se consultaron sitios que muestran mapas de los diversos proyectos (minería, fracking, hidrocarburos, hidroeléctricas, principalmente) que están surgiendo en México, ejemplos de estos sitios son: CartoCrítica, Mapa de concesiones mineras en México de la Agencia Subversiones, Mapa general de conflictos socio-ambientales del Observatorio Socioambiental de la Unión de Científicos Comprometidos con la Sociedad y del Centro de Ciencias de la Complejidad de la UNAM.</p>
          <p className="mb-6">Se dio seguimiento a las principales problemáticas actuales en las que los pueblos indígenas mexicanos tienen un papel protagónico y que ya eran parte de la base de datos que se desarrolló hasta el año 2012. Un sexenio después, observamos en esta investigación cualitativa, donde la defensa del territorio es el común denominador en los procesos de organización de carácter étnico que se resisten a la penetración de megaproyectos mineros y de energías alternativas en territorios sagrados y habitados por ellos ancestralmente. Es por eso que el cruce de los ejes analíticos I,II, III y V es predominante, los conflictos relacionados con territorio y recursos naturales son los que prevalecen. Ante ello, vemos también que los pueblos indígenas están en un proceso constante de cambio y organizados en la defensa de su territorio en distintos niveles.</p>
          <p className="mb-6">La búsqueda, identificación y actualización de los conflictos étnicos en México y América permite observar y analizar las causas así como el desarrollo de las diferentes problemáticas, también proporciona información para el estudio de la relación que existe entre el territorio desde la concepción indígena, el aprovechamiento de los recursos naturales y el interés de las empresas nacionales, transnacionales y el Estado por la implementación de proyectos  bajo la óptica de desarrollo y en algunos casos creación de empleos. También visibiliza la deuda histórica de respeto a la soberanía y reconocimiento de los derechos individuales y colectivos de los pueblos indígenas.</p>
          <p className="mb-6">En este sentido, también se visibilizan las estrategias de los grupos étnicos y el cambio gradual en su cultura política, entendiendo que son actores dinámicos que echan mano de diversos instrumentos legales, en su mayoría de carácter internacional, y que han sido fundamentales en la supervivencia de sus usos y costumbres, el usufructo y resguardo de su territorio frente a la dinámica de despojo de los capitales y los impactos de los diversos proyectos de desarrollo. La armonización con la Constitución mexicana con la legislación en materia de consulta a los pueblos indígenas es un nuevo compromiso del gobierno posterior a la alternancia partidista con los resultados de las pasadas elecciones del primero de julio.</p>
          <p className="mb-6">Además, el nuevo gobierno se enfrenta ante la problemática de reconstituir el diálogo entre las instituciones y los pueblos indígenas frente a un país en su mayoría concesionado a empresas extranjeras, reformas estructurales que despojan a la nación de los principales recursos y obligan a los pueblos a ejercer formas de autonomía que desconocen a los poderes del estado a través del derecho constitucional del derecho a la soberanía, como es el caso exitoso de Cherán en Michoacán, por ejemplo.</p>
          <p className="mb-6">Finalmente, es necesario puntualizar los presupuestos operativos que llevaron a la identificación de los conflictos que se presentan en la actualización de 2018:</p>
          <ol className="mb-6">
            <li className="list-decimal">Organización política</li>
            <li className="list-decimal">Comunicación con el Estado</li>
            <li className="list-decimal">Documentación del proceso</li>
          </ol>
          <p className="mb-6">Lo anterior permite focalizar la identificación dentro de la malla de conflictos que surgen de modo incipiente o coyuntural asociado a acontecimientos políticos de otro ámbito que no sea el étnico.</p>
          <p className="mb-6">Asimismo, una vez identificado el conflicto, este incluye a una zona o región del conflicto, para fines de tipificación y sistematización, muchas de las veces fue tomada una localidad o cabecera municipal estratégica, que notificara el punto de referencia dentro del mapa de georreferencia.</p>
          <div className="mt-10 flex justify-evenly">
            <button className="bg-naranjaSicetno text-white py-2 px-10 rounded-3xl">
              <Link to="/mapa">Ir al mapa interactivo</Link>
            </button>
            <button className="bg-verdeSicetno text-white py-2 px-10 rounded-3xl"><a target="_blank" rel="noopener noreferrer" href="https://www.sicetno.org/ords/f?p=2000100:1::::::">Ir a la base de datos</a></button>
          </div>
        </section>
      </main>
    </Layout>
  )
}
