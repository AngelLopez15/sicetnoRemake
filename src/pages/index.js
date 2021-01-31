import React from "react"
import Layout from "../layout/layout"

const IndexPage = () => (
  <Layout>
    <header className="bg-red-200 py-40 text-center">
      <h1 className="text-white text-6xl ">SICETNO</h1>
      <p>Es una plataforma de consulta en línea dirigida a los interesados en el estudio y desarrollo de la cultura política indígena. Fundada por la socióloga Natividad Gutiérrez Chong, investigadora del IIS, UNAM.</p>
      <p>Proyecto PAPIIT-UNAM IN301219 Afectación de intereses étnicos y neoliberalismo Proyecto SEP-CONACYT 128183</p>
      <button className="bg-verdeSicetno text-white py-2 px-10 rounded-3xl"><a target="_blank" rel="noopener noreferrer" href="https://www.sicetno.org/ords/f?p=2000100:1::::::">Ir a la Base de Datos</a></button>
    </header>
    <main className="container mx-auto px-10 text-justify leading-7">
      <section className="my-10">
        <h2>Acerca de SICETNO</h2>
        <p>Sistema de Consulta de Organizaciones Indígenas y Conflictos Étnicos en las Américas (SICETNO) es una plataforma digital desarrollada con herramientas innovadoras para vincular la investigación en ciencias sociales con la tecnología de la información sobre temas de democracia y derechos humanos en el continente. Sus objetivos son:</p>
        <p>Crear y desarrollar un sistema de consulta digital con información actualizada de las organizaciones de los pueblos indígenas y de los conflictos étnicos que ocurren en las Américas.</p>
        <p>La función de la plataforma es facilitar el acceso a la información y su socialización entre los diferentes actores sociales que involucren intereses étnicos, y de esta manera contribuir a que el trabajo desarrollado en las organizaciones logre ser visible en cuanto a sus planteamientos y propuestas con respecto a la autonomía, a la libre determinación, entre otros. La plataforma también muestra los tipos de conflictividad étnica en las Américas e identifica los daños y amenazas más frecuentes que ponen en riesgo a las poblaciones indígenas y a los territorios que habitan.</p>
        <p>Asiste a los fines de esta plataforma digital, las modalidades de incidencia planteadas por Rodolfo Stavenhagen en el <span>Informe del Relator Especial sobre la situación de los derechos humanos y las libertades fundamentales de los indígenas</span>, que expresa:</p>
        <blockquote cite="http://www.hchr.org.mx/index.php?option=com_content&view=article&id=133:informe-del-relator-especial-sobre-la-situacion-de-los-derechos-humanos-y-las-libertades-fundamentales-de-los-indigenas-sr-rodolfo-stavenhagen-mision-a-mexico-2003&catid=17&Itemid=278">
          <p>“En la actualidad las violaciones a los derechos humanos de los indígenas se dan con frecuencia en el marco de un alto grado de conflictividad, particularmente en el medio rural, que tiene que ver en especial con la cuestión agraria y con pugnas en torno al poder político local y regional. El Relator Especial fue informado reiteradamente de la existencia de conflictos en comunidades indígenas donde ocurren actos de violencia e intervenciones de las autoridades públicas, que pueden configurar violaciones a los derechos humanos. Según los informes recibidos, muchas de estas permanecen impunes y provocan el agravamiento de los conflictos y el recrudecimiento de la violencia.”<sup>1</sup></p>
        </blockquote>
        <p>1 Naciones Unidas (2003). Comisión de Derechos Humanos. Tema 15 del programa provisional. Recuperado de: <a target="_blank" rel="noopener noreferrer" href="http://www.hchr.org.mx/index.php?option=com_content&view=article&id=133:informe-del-relator-especial-sobre-la-situacion-de-los-derechos-humanos-y-las-libertades-fundamentales-de-los-indigenas-sr-rodolfo-stavenhagen-mision-a-mexico-2003&catid=17&Itemid=278">hchr</a></p>
      </section>
      <section className="mb-10">
        <h2>Herramientas de SICETNO</h2>
        <div>
          <div>
            <h3>Base de Datos</h3>
            <p>SICETNO es una plataforma digital que incluye dos Bases de Datos: Organizaciones indígenas de América Latina (ORGINDAL) y Conflictos étnicos y nacionalismos en las Américas (CETNA).</p>
          </div>
          <div>
            <h3>Organizaciones</h3>
            <p>Cuenta con un registro de 168 organizaciones de pueblos indígenas de México, Ecuador, Bolivia y Chile. Organizaciones fundadas y formadas por indígenas, con amplia representación popular, con identidad étnica originaria y con ideólogos, dirigentes, intelectuales y profesionales indígenas</p>
          </div>
          <div>
            <h3>Conflictos</h3>
            <p>Reúne información actualizada de 81 casos vigentes de etnicidad en conflicto localizados en las tres regiones del continente Américano. Resultado de una extensa investigación cualitativa de los tipos actuales de conflicto étnico en territorio americano que incluye a 19 estados-nación.</p>
          </div>
          <div>
            <h3>Mapa de las Organizaciones</h3>
            <p>Se muestra la ubicación de las organizaciones existentes en la base de Datos utilizando Google Maps.</p>
          </div>
          <div>
            <h3>Instrumentos jurídicos</h3>
            <p>Se pueden consultar algunos de los instrumentos jurídicos más relevantes en materia de derechos indígenas a nivel internacional y república mexicana.</p>
          </div>
          <div>
            <h3>Gráficas</h3>
            <p>Utilizando las herramientas interactivas que porporciona la página se puede obtener información cualitativa.</p>
          </div>
        </div>
      </section>
      <section className="mb-10">
        <h2>Proyecto SICETNO</h2>
        <p>El Sistema de Consulta de Organizaciones Indígenas y Conflictos Étnicos en las Américas. Surge para contribuir a subsanar la profunda y enorme desinformación que prevalece sobre las formas de participación política de los pueblos indígenas, tomando en consideración la abundancia de organizaciones, perfiles ideológicos, formas de liderazgo, tipos de demandas y capacidad de formar alianzas, es fundamental construir herramientas que contribuyan al estudio de los pueblos indígenas y el Estado. Otra razón, que motivó su construcción es la de generar estudios confiables sobre la cultura política indígena, desterrando o desmintiendo algunos mitos que han confundido la forma de hacer política de los pueblos indígenas.</p>
      </section>
      <section className="mb-10">
        <h2>Desarrollo</h2>
        <p>El esfuerzo conjunto de un grupo de investigadores ha logrado situar a SICETNO como la primera plataforma digital de consulta y monitoreo de pueblos indígenas en las Américas, que enfrentan conflictos recientes y que han desarrollado mayor visibilidad política y capacidad de acción colectiva.</p>
      </section>
      <section className="mb-10">
        <h2>Conoce más</h2>
        <div>
          <div>
            <p>Las sociedades indígenas tienen su propia historia de movilización, de lucha y de protesta, por lo que están lejos de ser pasivas, indiferentes o apáticas, sin embargo el control autoritario hacia estos grupos se expresa con más contundencia. Además están mayoritariamente privadas o limitadas de un recurso esencial para el funcionamiento de la democracia: el acceso a la información y el control de sus medios de comunicación.</p>
          </div>
          <div>
            VIDEO
          </div>
        </div>
      </section>
      <section className="mb-10">
        <h2>SICETNO está integrada por dos bases de datos en línea:</h2>
        <div>
          <div>
            <h3>Conflictos étnicos y nacionalismos en las Américas (CETNA).</h3>
            <p>Incluye el registro completo de cada uno de los 83 casos vigentes de etnicidad en conflicto y que son localizados en las tres regiones del continente americano. Aproximadamente se incluyen en la Base, cincuenta pueblos indígenas involucrados y ciento dos organizaciones relacionadas con uno o más de estos conflictos.</p>
          </div>
          <div>
            <h3>Organizaciones Indígenas de América Latina (ORGINDAL).</h3>
            <p>Incluye 173 organizaciones indígenas, de México, Bolivia, Chile y Ecuador, fundadas y formadas por indígenas, con amplia representación popular, con identidad étnica originaria y con ideólogos, dirigentes, intelectuales y profesionales indígenas. La información disponible busca ser una contribución al desarrollo de la política india/ indígena en sustitución del indigenismo institucional.</p>
          </div>
        </div>
      </section>
      <section className="mb-10">
        <h2>Datos cualitativos</h2>
        <p>Ambas bases de datos cualitativos son insumos de varias investigaciones sobre la cultura política indígena y la conflictividad étnica, realizadas en el Instituto de Investigaciones Sociales de la Universidad Nacional Autónoma de México, bajo la coordinación de la doctora Natividad Gutiérrez Chong, y recibieron financiamiento de la Delegación de la Comisión Europea en México, del Programa PAPPIT- DGAPA UNAM y del Consejo Nacional de Ciencia y Tecnología (SEP-CONACYT 128183). Con estos financiamientos ha sido posible llevar a cabo un extenso trabajo de campo que incluyó a México, Bolivia, Ecuador y Chile y también permitió desarrollar la parte tecnológica de esta investigación cualitativa.</p>
      </section>
      <section className="mb-10">
        <h2>Recomendaciones</h2>
        <p>AQUI VA EL CARRUSEL DE FRASES</p>
      </section>
      <section className="mb-10">
        <h2>Manual técnico</h2>
        <p>SICETNO consta de un Manual Técnico en donde se describen las metodologías que se emplearon para la realización de este proyecto así como también el uso de las herramientas de búsqueda con que cuenta la base de datos con ejemplos ilustrados.</p>
        <button className="bg-verdeSicetno text-white py-2 px-10 rounded-3xl">Ver Manual técnico</button>
      </section>
    </main>
  </Layout>
)

export default IndexPage
