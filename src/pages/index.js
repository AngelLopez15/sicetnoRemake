import React from "react"
import Layout from "../layout/layout"
import {ReactComponent as IconArrow} from "../images/svg/arrow-alt-circle-right-regular.svg"
import {ReactComponent as IconDB} from "../images/svg/database-solid.svg"
import {ReactComponent as IconUsers} from "../images/svg/users-solid.svg"
import {ReactComponent as IconMap} from "../images/svg/globe-americas-solid.svg"
import {ReactComponent as IconMapMarker} from "../images/svg/map-marker-alt-solid.svg"
import {ReactComponent as IconJudgeHammer} from "../images/svg/gavel-solid.svg"
import {ReactComponent as IconChart} from "../images/svg/chart-pie-solid.svg"
import {ReactComponent as IconTree} from "../images/svg/tree-solid.svg"
import frase1 from '../images/carrusel/frase1.webp'
import frase2 from '../images/carrusel/frase2.webp'
import frase3 from '../images/carrusel/frase3.webp'
import frase4 from '../images/carrusel/frase4.webp'
import frase5 from '../images/carrusel/frase5.webp'
import frase6 from '../images/carrusel/frase6.webp'
import Image from "../components/Image"
import Carrusel from "../components/Carrusel"

const IndexPage = () => (
  <Layout>
    <header className="bg-gray-200 py-28 px-8 text-center bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 wallpaper-home">
      <h1 className="text-white text-6xl font-extrabold mb-6">SICETNO</h1>
      <p className="mb-6 text-white text-2xl">Es una plataforma de consulta en línea dirigida a los interesados en el estudio y desarrollo de la cultura política indígena. Fundada por la socióloga <span className="font-bold">Natividad Gutiérrez Chong, investigadora del IIS, UNAM.</span></p>
      <p className="mb-6 text-white text-2xl font-bold">Proyecto PAPIIT-UNAM IN301219 Afectación de intereses étnicos y neoliberalismo</p>
      <p className="mb-6 text-white text-2xl font-bold">Proyecto SEP-CONACYT 128183</p>
      <button className="bg-moradoSicetno text-white py-2 px-10 rounded-3xl shadow-lg transition duration-500 ease-in-out hover:bg-verdeSicetno transform hover:-translate-y-1 hover:scale-110"><a target="_blank" rel="noopener noreferrer" href="https://www.sicetno.org/ords/f?p=2000100:1::::::">Ir a la Base de Datos<IconArrow className="w-6 inline ml-2" /></a></button>
    </header>
    <main className="container mx-auto px-10 text-justify leading-7">
      <section className="my-10">
        <h2 className="text-center text-blue-600 text-4xl font-bold mb-10">Acerca de SICETNO</h2>
        <p className="mb-6">Sistema de Consulta de Organizaciones Indígenas y Conflictos Étnicos en las Américas (SICETNO) es una plataforma digital desarrollada con herramientas innovadoras para vincular la investigación en ciencias sociales con la tecnología de la información sobre temas de democracia y derechos humanos en el continente. Sus objetivos son:</p>
        <p className="mb-6">Crear y desarrollar un sistema de consulta digital con información actualizada de las organizaciones de los pueblos indígenas y de los conflictos étnicos que ocurren en las Américas.</p>
        <p className="mb-6">La función de la plataforma es facilitar el acceso a la información y su socialización entre los diferentes actores sociales que involucren intereses étnicos, y de esta manera contribuir a que el trabajo desarrollado en las organizaciones logre ser visible en cuanto a sus planteamientos y propuestas con respecto a la autonomía, a la libre determinación, entre otros. La plataforma también muestra los tipos de conflictividad étnica en las Américas e identifica los daños y amenazas más frecuentes que ponen en riesgo a las poblaciones indígenas y a los territorios que habitan.</p>
        <p className="mb-6">Asiste a los fines de esta plataforma digital, las modalidades de incidencia planteadas por Rodolfo Stavenhagen en el <span>Informe del Relator Especial sobre la situación de los derechos humanos y las libertades fundamentales de los indígenas</span>, que expresa:</p>
        <blockquote cite="http://www.hchr.org.mx/index.php?option=com_content&view=article&id=133:informe-del-relator-especial-sobre-la-situacion-de-los-derechos-humanos-y-las-libertades-fundamentales-de-los-indigenas-sr-rodolfo-stavenhagen-mision-a-mexico-2003&catid=17&Itemid=278">
          <p className="mb-6">“En la actualidad las violaciones a los derechos humanos de los indígenas se dan con frecuencia en el marco de un alto grado de conflictividad, particularmente en el medio rural, que tiene que ver en especial con la cuestión agraria y con pugnas en torno al poder político local y regional. El Relator Especial fue informado reiteradamente de la existencia de conflictos en comunidades indígenas donde ocurren actos de violencia e intervenciones de las autoridades públicas, que pueden configurar violaciones a los derechos humanos. Según los informes recibidos, muchas de estas permanecen impunes y provocan el agravamiento de los conflictos y el recrudecimiento de la violencia.”<sup>1</sup></p>
        </blockquote>
        <p className="text-center text-xs">1 Naciones Unidas (2003). Comisión de Derechos Humanos. Tema 15 del programa provisional. Recuperado de: <a target="_blank" rel="noopener noreferrer" href="http://www.hchr.org.mx/index.php?option=com_content&view=article&id=133:informe-del-relator-especial-sobre-la-situacion-de-los-derechos-humanos-y-las-libertades-fundamentales-de-los-indigenas-sr-rodolfo-stavenhagen-mision-a-mexico-2003&catid=17&Itemid=278">hchr</a></p>
      </section>
      <section className="mb-10">
        <h2 className="text-moradoSicetno text-4xl font-bold text-center mb-6">Herramientas de SICETNO</h2>
        <div className="w-full flex justify-between flex-wrap">
          <div className="w-1/3 px-5 mb-5">
            <div className="flex justify-center">
              <IconDB className="w-12 mb-2"/>
            </div>
            <h3 className="text-yellow-600 text-center font-semibold text-2xl mb-3">Base de Datos</h3>
            <p>SICETNO es una plataforma digital que incluye dos Bases de Datos: Organizaciones indígenas de América Latina (ORGINDAL) y Conflictos étnicos y nacionalismos en las Américas (CETNA).</p>
          </div>
          <div className="w-1/3 px-5 mb-5">
            <div className="flex justify-center">
              <IconUsers className="w-16 mb-2"/>
            </div>
            <h3 className="text-yellow-600 text-center font-semibold text-2xl mb-3">Organizaciones</h3>
            <p>Cuenta con un registro de 168 organizaciones de pueblos indígenas de México, Ecuador, Bolivia y Chile. Organizaciones fundadas y formadas por indígenas, con amplia representación popular, con identidad étnica originaria y con ideólogos, dirigentes, intelectuales y profesionales indígenas</p>
          </div>
          <div className="w-1/3 px-5 mb-5">
            <div className="flex justify-center">
              <IconMap className="w-12 mb-2"/>
            </div>
            <h3 className="text-yellow-600 text-center font-semibold text-2xl mb-3">Conflictos</h3>
            <p>Reúne información actualizada de 81 casos vigentes de etnicidad en conflicto localizados en las tres regiones del continente Américano. Resultado de una extensa investigación cualitativa de los tipos actuales de conflicto étnico en territorio americano que incluye a 19 estados-nación.</p>
          </div>
          <div className="w-1/3 px-5 mb-5">
            <div className="flex justify-center">
              <IconMapMarker className="w-12 mb-2"/>
            </div>
            <h3 className="text-yellow-600 text-center font-semibold text-2xl mb-3">Mapa de las Organizaciones</h3>
            <p>Se muestra la ubicación de las organizaciones existentes en la base de Datos utilizando Google Maps.</p>
          </div>
          <div className="w-1/3 px-5 mb-5">
            <div className="flex justify-center">
              <IconJudgeHammer className="w-16 mb-2"/>
            </div>
            <h3 className="text-yellow-600 text-center font-semibold text-2xl mb-3">Instrumentos jurídicos</h3>
            <p>Se pueden consultar algunos de los instrumentos jurídicos más relevantes en materia de derechos indígenas a nivel internacional y república mexicana.</p>
          </div>
          <div className="w-1/3 px-5 mb-5">
            <div className="flex justify-center">
              <IconChart className="w-16 mb-2"/>
            </div>
            <h3 className="text-yellow-600 text-center font-semibold text-2xl mb-3">Gráficas</h3>
            <p>Utilizando las herramientas interactivas que porporciona la página se puede obtener información cualitativa.</p>
          </div>
        </div>
      </section>
      <section className="mb-10">
        <h2 className="text-moradoSicetno text-4xl font-bold text-center mb-6">Proyecto SICETNO</h2>
        <div className="flex w-full">
          <div className="w-1/2">
            <p className="px-16 py-10">El Sistema de Consulta de Organizaciones Indígenas y Conflictos Étnicos en las Américas. Surge para contribuir a subsanar la profunda y enorme desinformación que prevalece sobre las formas de participación política de los pueblos indígenas, tomando en consideración la abundancia de organizaciones, perfiles ideológicos, formas de liderazgo, tipos de demandas y capacidad de formar alianzas, es fundamental construir herramientas que contribuyan al estudio de los pueblos indígenas y el Estado. Otra razón, que motivó su construcción es la de generar estudios confiables sobre la cultura política indígena, desterrando o desmintiendo algunos mitos que han confundido la forma de hacer política de los pueblos indígenas.</p>
          </div>
          <div className="w-1/2 m-auto">
            <Image fileName="telarhome.webp" alt="imagen con un acercamiento a los hijos montados en un telar"/>
          </div>
        </div>
      </section>
      <section className="mb-10">
        <h2 className="text-moradoSicetno text-4xl font-bold text-center mb-6">Desarrollo</h2>
        <div className="flex w-full">
          <div className="w-1/2">
            <Image fileName="alebrijes.jpg" alt="imagen de una gran variadad de alebrijes de Oaxaca"/>
          </div>
          <div className="w-1/2 m-auto">
            <p className="px-16 py-10">El esfuerzo conjunto de un grupo de investigadores ha logrado situar a SICETNO como la primera plataforma digital de consulta y monitoreo de pueblos indígenas en las Américas, que enfrentan conflictos recientes y que han desarrollado mayor visibilidad política y capacidad de acción colectiva.</p>
          </div>
        </div>
      </section>
      <section className="mb-10">
        <h2 className="text-moradoSicetno text-4xl font-bold text-center mb-6">Conoce más</h2>
        <div className="flex w-full">
          <div className="w-1/2">
            <p className="px-16 py-10">Las sociedades indígenas tienen su propia historia de movilización, de lucha y de protesta, por lo que están lejos de ser pasivas, indiferentes o apáticas, sin embargo el control autoritario hacia estos grupos se expresa con más contundencia. Además están mayoritariamente privadas o limitadas de un recurso esencial para el funcionamiento de la democracia: el acceso a la información y el control de sus medios de comunicación.</p>
          </div>
          <div className="w-1/2 flex justify-center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/tdbOgPaIrj8?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </section>
      <section className="mb-10">
        <h2 className="text-moradoSicetno text-4xl font-bold text-center mb-6">SICETNO está integrada por dos bases de datos en línea:</h2>
        <div className="flex w-full">
          <div className="w-1/2">
            <div className="flex justify-center">
              <IconTree className="w-10 mb-2"/>
            </div>
            <h3 className="text-yellow-600 text-center font-semibold text-2xl mb-3">Conflictos étnicos y nacionalismos en las Américas (CETNA).</h3>
            <p className="text-justify px-5">Incluye el registro completo de cada uno de los 83 casos vigentes de etnicidad en conflicto y que son localizados en las tres regiones del continente americano. Aproximadamente se incluyen en la Base, cincuenta pueblos indígenas involucrados y ciento dos organizaciones relacionadas con uno o más de estos conflictos.</p>
          </div>
          <div className="w-1/2">
            <div className="flex justify-center">
              <IconMap className="w-12 mb-2"/>
            </div>
            <h3 className="text-yellow-600 text-center font-semibold text-2xl mb-3">Organizaciones Indígenas de América Latina (ORGINDAL).</h3>
            <p className="text-justify px-5">Incluye 173 organizaciones indígenas, de México, Bolivia, Chile y Ecuador, fundadas y formadas por indígenas, con amplia representación popular, con identidad étnica originaria y con ideólogos, dirigentes, intelectuales y profesionales indígenas. La información disponible busca ser una contribución al desarrollo de la política india/ indígena en sustitución del indigenismo institucional.</p>
          </div>
        </div>
      </section>
      <section className="mb-10">
        <h2 className="text-moradoSicetno text-4xl font-bold text-center mb-6">Datos cualitativos</h2>
        <div className="flex w-full">
          <div className="w-1/2">
            <p className="px-16 py-10">Ambas bases de datos cualitativos son insumos de varias investigaciones sobre la cultura política indígena y la conflictividad étnica, realizadas en el Instituto de Investigaciones Sociales de la Universidad Nacional Autónoma de México, bajo la coordinación de la doctora Natividad Gutiérrez Chong, y recibieron financiamiento de la Delegación de la Comisión Europea en México, del Programa PAPPIT- DGAPA UNAM y del Consejo Nacional de Ciencia y Tecnología (SEP-CONACYT 128183). Con estos financiamientos ha sido posible llevar a cabo un extenso trabajo de campo que incluyó a México, Bolivia, Ecuador y Chile y también permitió desarrollar la parte tecnológica de esta investigación cualitativa.</p>
          </div>
          <div className="w-1/2">
            <Image fileName="hilos.webp" alt="Imagen de muchas madejas de hilos de colores" />
          </div>
        </div>
      </section>
      <section className="mb-10">
        <h2 className="text-moradoSicetno text-4xl font-bold text-center mb-6">Recomendaciones</h2>
        <div className="flex w-full justify-center" >
          <div className="w-4/5">
            <Carrusel 
              frase1={frase1}
              frase2={frase2}
              frase3={frase3}
              frase4={frase4}
              frase5={frase5}
              frase6={frase6}
            />
          </div>
        </div>
      </section>
      <section className="mb-10">
        <h2 className="text-moradoSicetno text-4xl font-bold text-center mb-6">Manual técnico</h2>
        <div className="flex w-full">
          <div className="w-1/2">
            <Image fileName="lago.jpg" alt="Imagen de muchas madejas de hilos de colores" />
          </div>
          <div className="w-1/2">
            <div>
              <p className="px-16 py-10">SICETNO consta de un Manual Técnico en donde se describen las metodologías que se emplearon para la realización de este proyecto así como también el uso de las herramientas de búsqueda con que cuenta la base de datos con ejemplos ilustrados.</p>
              <div className="flex justify-center">
              <button className="bg-verdeSicetno text-white py-2 px-10 rounded-3xl shadow-lg transition duration-500 ease-in-out hover:bg-moradoSicetno transform hover:-translate-y-1 hover:scale-110">Ver Manual técnico</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </Layout>
)

export default IndexPage
