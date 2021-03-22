import React from 'react'
import Layout from '../layout/layout'
import Image from "../components/Image"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import cv from "../doc/cv.pdf"
import SEO from "../components/seo"
import imagenSeo from "../images/logos/sicetno.png"

export default function natividad() {

  const lineas = [
    {
      'text': 'Nacionalismo'
    },
    {
      'text': 'Cultura política indígena'
    },
    {
      'text': 'Multiculturalismo'
    },
    {
      'text': 'Interculturalidad'
    },
    {
      'text': 'Identidad'
    },
    {
      'text': 'Etnicidad'
    },
    {
      'text': 'Etnicidad'
    }
  ]

  const formacion = [
    {
      'text': 'Doctora en Sociología (PhD). The London School of Economics and Political Science, Universidad de Londres.'
    },
    {
      'text': 'Maestra en Sociología (MSc). The London School of Economics and Political Science, Universidad de Londres.'
    },
    {
      'text': 'Licenciada en Sociología. Facultad de Ciencias Políticas y Sociales, Universidad Nacional Autónoma de México.'
    },
  ]

  const investigacion = [
    {
      'text': 'Afectación de intereses étnicos y neoliberalismo. PAPIIT DGAPA-UNAM IN 301219.'
    },
    {
      'text': 'Plataforma digital sobre estudios sobre la diversidad cultural en México. PAPIME DGAPA-UNAM PE 404617.'
    },
    {
      'text': 'Jóvenes de identidades diversas en dinámicas metropolitanas Proyecto CONACYT 2368.'
    },
    {
      'text': 'Nuevas configuraciones de los nacionalismos y los racismos. Seminario Permanente Institucional IIS-UNAM.'
    },
    {
      'text': 'Pueblos indígenas y racismo. Red INTEGRA, Centro de Estudios Interdisciplinarios y CONACYT.'
    },
    {
      'text': 'Racismo y discriminación en la era del multiculturalismo. Bolsa de investigación. IISUNAM (2008-2019).'
    },
    {
      'text': '“Los mexicanos vistos por sí mismos: los grandes problemas nacionales. Encuesta Nacional de Indígenas." Investigadora invitada por el Instituto de Investigaciones Jurídicas en colaboración con la Rectoría de la UNAM. (30 de septiembre de 2014).'
    },
    {
      'text': 'Cultura política e intelectuales indígenas. Respuestas del resurgimiento étnico en América Latina. CONACYT. Clave 128183 (2010-2014).'
    },
    {
      'text': 'Pueblos indígenas y racismo. Red INTEGRA, Centro de Estudios Interdisciplinarios y CONACYT.'
    },
    {
      'text': 'La construcción de una democracia con perspectiva intercultural. Centro para el Desarrollo Democrático del Instituto Federal Electoral (agosto 2013- enero 2014). Financiamiento IFE -CONACYT.'
    },
    {
      'text': 'Sistema de consulta de organizaciones políticas y conflictos étnicos en las Américas. Una propuesta de plataforma digital. Responsable. Financiamiento: PAPIIT: IN301409-2 (2008 2010).'
    },
    {
      'text': 'El festejo mexicano del bicentenario de la independencia y los pueblos originarios. Responsable. Centro de Estudios para América Latina y la Cooperación Internacional de la Fundación Carolina. CeALCI 06/10 (2010-2011).'
    },
    {
      'text': 'Estudio para la Elaboración de Programas de Prevención y Erradicación de la Discriminación Social en la Ciudad de México. 1. Diagnóstico de Indígenas en la ciudad de México y 2. Víctimas de explotación sexual. Participante. Financiamiento: Secretaria de Desarrollo Social. Gobierno del Distrito Federal y Programa Universitario de Estudios sobre la Ciudad. Responsable. (2008).'
    },
    {
      'text': 'Evaluación Interdisciplinaria Intersectorial y Participativa del Diseño de Programas de Derechos Humanos del DF (PDHDF), del cual fui responsable del análisis de dos: capítulos. 1 Derechos de los pueblos y comunidades indígenas y 2. Derechos de las víctimas de trata y explotación comercial. Financiamiento: Programas de Derechos Humanos del Distrito Federal y Programa Universitario de Estudios sobre la Ciudad. (2010).'
    },
    {
      'text': 'Nacionalismo de naciones sin estado y pueblos indios. Un estudio comparativo de los movimientos étnicos en México, Ecuador y España. Responsable. Financiamiento PAPIIT. DGAPA UNAM. IN308805 (2008).'
    },
    {
      'text': 'Conflictos étnicos y nacionalismos contemporáneos en las Américas. Responsable. Financiamiento: CONACYT. 46149 (2005 - 2009).'
    },
    {
      'text': 'Fortalecimiento del capital social étnico como lucha contra la discriminación de los pueblos indígenas en México. Responsable. Financiamiento: Delegación de la Comisión Europea en México. Iniciativa Europea para la Democracia y los Derechos Humanos. 89010 (2006-2007).'
    },
    {
      'text': 'Mujeres y Nacionalismo (Estudios de “Matria”, Territorio y Región) Responsable.Financiamiento: PAPIIT. DGAPA UNAM. PAPIIT (2004).'
    },
    {
      'text': 'Cultura del riesgo: Una exploración del impacto social por la industria de alto riesgo en México. Responsable. Financiamiento: Programa Universitario de Energía (1998).'
    },
    {
      'text': 'Perfiles Indígenas en Ciudades de México con la investigación Migrantes Mayas en Cancún. Participante. Financiamiento: Banco Mundial (1998).'
    },
    {
      'text': 'Etnia o nación: Los intelectuales indígenas de México. Responsable. Financiamiento: CONACYT (Programa de repatriación) (1996).'
    },
    {
      'text': 'Investigación documental sobre la Oferta Educativa para Indígenas Migrantes a la Zona Metropolitana de la Ciudad de México, PROLAP (Ciudad de México) 1999- 2000.'
    },
    {
      'text': 'Asistente de investigación del Dr Martin Ennals en el proyecto Guía Mundial de Minorías (Sección Europa - Standing International Forum on Ethnic Conflict Development and Human Rights). International Alert (Londres) y El Colegio de México (Ciudad de México) 1986-1987.'
    },
    {
      'text': 'Asistente de investigación del Dr Rodolfo Stavenhagen en el proyecto Guía Mundial de Minorías El Colegio de México (Ciudad de México) 1984-1985.'
    },
    {
      'text': 'Investigadora del proyecto Nacionalidades minoritarias y autonomía territorial en la República Popular China Academia China de Ciencias Sociales (Beijing, RPCh) 1983-1984.'
    },
    {
      'text': 'Asistente de investigación del proyecto Minorías Etnicas y Estados Nacionales Centro de Estudios Económicos y Sociales del Tercer Mundo CEESTEM (Ciudad de México) 1981-1983.'
    },
  ]

  const libros = [
    {
      titulo: 'El indigeniso del PAN y el festejo del bicentenario del Estado mexicano.',
      editorial: 'IISUNAM-Bonilla Artigas Editores, S.A. de C.V. ISBN:978-607-8348-55-8',
    },
    {
      titulo: 'Nationalist Myths and Ethnic Identities: Indigenous Intellectuals and the Mexican State.',
      editorial: 'Nebraska University Press, Lincoln y Londres, 1999. ISBN 0-8032-21770 ISBN 0-8032-7078-X',
    },
    {
      titulo: 'Mitos nacionalistas e identidades étnicas. Los intelectuales indígenas y el estado mexicano.',
      editorial: 'Instituto de Investigaciones Sociales, UNAM, 2012, 2nd edición. ISBN 978-607-02-3772-0',
    },
    {
      titulo: 'Autonomía étnica en China, Cuaderno de investigación.',
      editorial: 'Instituto de Investigaciones Sociales, UNAM, 2012, 2nd edición. ISBN 978-607-02-3772-0',
    },
    {
      titulo: 'Gobernabilidad en Oaxaca. Municipios de competencia partidaria y de usos y costumbres.',
      editorial: 'Labastida Julio, Gutiérrez Chong Natividad y Flores Julia,Instituto de Investigaciones Sociales, 2009. ISBN 979-970-32-2103-4.',
    },
    {
      titulo: 'Etnicidad y conflicto en las Américas, Territorios y reconocimiento constitucional, Volumen I.',
      editorial: 'Instituto de Investigaciones Sociales, UNAM, México, 2013 ISBN 978-607-02-4413-1. (obra completa: ISBN 978-607-02-4413-4).',
    },
    {
      titulo: 'Etnicidad y conflicto en las Américas, Violencia y Activismo político, Volumen II.',
      editorial: 'Instituto de Investigaciones Sociales, UNAM, México, 2013 ISBN 978-607-02-4413-8. (obra completa: ISBN 978-607-02-4413-4).',
    },
    {
      titulo: 'Conflictos étnicos y etnonacionalismos en las Américas. Reportes de Investigación.',
      editorial: '2009, Abya- Yala, Quito. ISBN 978-9978-22-791-6.',
    },
    {
      titulo: 'Mujeres y Nacionalismo: De la independencia a la nación del nuevo milenio.',
      editorial: '2004, Instituto de Investigaciones Sociales, 2004. ISBN 970-32-14-12-6.',
    },
    {
      titulo: 'Women, Ethnicity and Nationalisms in Latin America.',
      editorial: 'Ashgate, Hampshire2008. ISBN 978-0-7546-4925-0',
    },
    {
      titulo: 'Estados y autonomías en democracias contemporáneas. Bolivia, Ecuador, España y México.',
      editorial: '2008, Unión Europea, Instituto de Investigaciones Sociales y Plaza y Valdés ISBN 978–607–402–089-2.',
    },
    {
      titulo: 'Modern Roots: Studies on National Identity.',
      editorial: 'Dieckhoff Alain and Gutiérrez Natividad. Ashgate - UNESCO, Hampshire 2001. ISBN 0 7546 1152 3.',
    },
  ]

  const capitulos = [
    {
      titulo: '"Multietnicidad en los espacios públicos de la ciudad de México."',
      text: 'Las disputas por la ciudad. Espacio social y espacio público en contextos urbanos de Latinoamérica y Europa, Patricia Ramírez Kuri (coordinadora), IIS-Porrúa, 2013. ISBN: 978-607-401-799-1.'
    },
    {
      titulo: '"Nota preliminar"',
      text: 'Etnicidad y conflicto en las Américas, Territorios y reconocimiento constitucional, Volumen I, Instituto de Investigaciones Sociales, UNAM, México, 2013 ISBN 978-607-02-4413-1. (obra completa: ISBN 978-607-02-4413-4).'
    },
    {
      titulo: '"Introducción. Conflictos étnicos y etno nacionalismos: modelos de análisis para el continente americano"',
      text: 'Etnicidad y conflicto en las Américas, Territorios y reconocimiento constitucional, Volumen I, Instituto de Investigaciones Sociales, UNAM, México, ISBN 978-607-02-4413-1. (obra completa: ISBN 978-607-02-4413-4).'
    },
    {
      titulo: 'Capitulo 1. "El mapa metodológico de la etnicidad en conflicto"',
      text: 'Etnicidad y conflicto en las Américas, Territorios y reconocimiento constitucional, Volumen I, Instituto de Investigaciones Sociales, UNAM, México, ISBN 978-607-02-4413-1. (obra completa: ISBN 978-607-02-4413-4).'
    },
    {
      titulo: '"Resumen del Volumen I"',
      text: 'Etnicidad y conflicto en las Américas, Territorios y reconocimiento constitucional, Volumen I, Instituto de Investigaciones Sociales, UNAM, México, ISBN 978-607-02-4413-1. (obra completa: ISBN 978-607-02-4413-4).'
    },
    {
      titulo: '"Introducción"',
      text: 'Etnicidad y conflicto en las Américas, Violencia y Activismo político, Volumen II, Instituto de Investigaciones Sociales, UNAM, México, ISBN 978-607-02-4413-8. (obra completa: ISBN 978-607-02-4413-4).'
    },
    {
      titulo: 'Capítulo 9',
      text: '"Tipos de violencia contra las poblaciones indígenas" Etnicidad y conflicto en las Américas, Violencia y Activismo político, Volumen II, Instituto de Investigaciones Sociales, UNAM, México, ISBN 978-607-02-4413-8. (obra completa: ISBN 978-607-02-4413-4).'
    },
    {
      titulo: 'Capítulo 10',
      text: '"Las dimensiones políticas de la conflictividad étnica". Etnicidad y conflicto en las Américas, Violencia y Activismo político, Volumen II, Instituto de Investigaciones Sociales, UNAM, México, ISBN 978-607-02-4413-8. (obra completa: ISBN 978-607-02-4413-4).'
    },
    {
      titulo: '"Conclusión. La investigación sobre la conflictividad étnica en las Américas"',
      text: 'Etnicidad y conflicto en las Américas, Violencia y Activismo político, Volumen II, Instituto de Investigaciones Sociales, UNAM, México, ISBN 978-607-02-4413-8. (obra completa: ISBN 978-607-02-4413-4).'
    },
    {
      titulo: '"Que son os etnonacionalismos e os conflitos étnicos hoxe en América Latina?"',
      text: 'O (os) sentido (s) da (s) cultura (s), Ramón Máiz (compilador) Consello da Cultura Galega, Santiago de Compostela, 2012. ISBN: 978-84-92923-34-2.'
    },
    {
      titulo: '“Ethnopolitics and the Democratization of the Latin American State”',
      text: 'Comparative Indigeneities of the Americas, M. Bianet Castellanos, Lourdes Gutiérrez Nájera and Arturo J. Aldama (editors), Critical Issues in Indigenous Studies, The University of Arizona Press, Tucson, 2012. ISBN: 978-0-8165-2101-2 (pbk.:alk.paper).'
    },
    {
      titulo: '"Etnicidad y espacio público en la Ciudad de México"',
      text: 'Ciudades del 2010: entre la sociedad del conocimiento y la desigualdad social, Alicia Ziccardi (coordinadora), Programa Universitario de Estudios sobre la Ciudad, UNAM, México, 2012. ISBN: 978-607-02-3644-0.'
    },
    {
      titulo: '"Reflexiones sobre la etnicidad del estado-nación de China y México".',
      text: '40 años de la relación entre México y China. Acuerdos, desencuentros y futuro, Enrique Dussel Peters (coordinador), Facultad de Economía, Centro de Estudios China-México, UNAM, México, 2012. ISBN: 978-607-02-2952-7.'
    },
    {
      titulo: '"El uso del pasado y el origen étnico en la construcción de la identidad política del pueblo indígena y la nación dominante”',
      text: 'Pueblos Indígenas: debates y perspectivas, Gabriel Baeza Espejel, Gabriela Gómez Guerrero y Noemí Elena Ramón (coord.). Serie Pluralidad Cultural en México / 25, Programa Universitario Nación Multicultural, UNAM, México, 2011 México. ISBN: 978-607-022-1996.'
    },
    {
      titulo: '"Los festejos del estado y la exclusión de los pueblos indígenas en el bicentenario de la independencia"',
      text: 'Participación indígena en los procesos de independencia y revolución mexicana. Comisión Nacional para el Desarrollo de los Pueblos Indígenas, México, 2011. ISBN: 978-607-718-002-9.'
    },
    {
      titulo: '"Los festejos de los nacionalismos y los resurgimientos étnicos: del patriotismo criollo al multiculturalismo del siglo XXI"',
      text: 'Los indígenas en la independencia y en la revolución mexicana, Miguel León Portilla y Alicia Mayer (coordinadores). Instituto de Investigaciones Históricas, Serie Historia Moderna y Contemporánea / 57, México, 2010. ISBN: 978-607-7844-10-5.'
    },
    {
      titulo: '“El activismo político indígena y la institucionalización del Estado: ¿políticas de indiferencia o de reconocimiento cultural?”',
      text: 'Los Grandes problemas de México. Movimientos Sociales VI, Ilán Bizberg y Francisco Zapata (coordinadores) El Colegio de México, México, 2010. ISBN: 978-607-462-126-6.'
    },
    {
      titulo: '“Los pueblos indígenas en los nacionalismos de independencia y liberación: el colonialismo interno revisitado”',
      text: 'Independencia y Revolución. Contribuciones en torno a su conmemoración, Rosalba Casas (compiladora), Instituto de Investigaciones Sociales, UNAM, México, 2010. ISBN:978-607-02-1544-5.'
    },
    {
      titulo: '“Conflictos étnicos: estado y nación”.',
      text: 'Natividad Gutiérrez Chong Conflictos étnicos y etnonacionalismos en las Americas. Reportes de Investigación, 2009, Abya- Yala, Quito. ISBN 978-9978-22-791-6.'
    },
    {
      titulo: '“Masacres genocidas en contexto étnico. Acteal y Agua Fría”.',
      text: 'Natividad Gutiérrez Chong Conflictos étnicos y etnonacionalismos en las Americas. Reportes de Investigación, 2009, Abya- Yala, Quito. ISBN 978-9978-22-791-6.'
    },
    {
      titulo: '“Presentación y Comentarios Finales”.',
      text: 'Natividad Gutiérrez Chong Estados y autonomías en democracias contemporáneas. Bolivia, Ecuador, España y México, 2008, Unión Europea, Instituto de Investigaciones Sociales y Plaza y Valdés ISBN 978–607–402–089-2.'
    },
    {
      titulo: '“Territorios y regiones de autonomía en los resurgimientos étnicos”',
      text: 'Natividad Gutiérrez Chong Estados y autonomías en democracias contemporáneas. Bolivia, Ecuador, España y México, 2008, Unión Europea, Instituto de Investigaciones Sociales y Plaza y Valdés ISBN 978–607–402–089-2.'
    },
    {
      titulo: '“O nacionalismo no México: em busca das lectoras da comunidade imaginada”',
      text: 'RevoluçÕes de independ ências e nacionalismos nas Américas. Marco A. Pamplona y Maria Elisa M äder. Paz e Terra, 2008 ISBN 978-85-7753-052-6.'
    },
    {
      titulo: '“Ethnic Origins and Indigenous Peoples. An Approach from Latin America”',
      text: 'Ethnosymbolism: Critical Approaches to Ethnicity and Nationalism, Athena Leoussi y Stephen Grossby (eds) Universidad de Edinburgo, 2006. ISBN 978-074-862-113.2'
    },
    {
      titulo: '“China: ¿integración o desintegración territorial?”',
      text: 'China en el Siglo XXI. Economía, política y sociedad de una potencia emergente, José Luis Estrada, José Luis León y Ricardo Buzo (coordinadores) Miguel Angel Porrúa y UAM-Iztapalapa, 2006. ISBN 970-701-863-1.'
    },
    {
      titulo: '“Nación, pueblo y etnia: un debate actual”',
      text: 'Nación y movimiento en América Latina. Debate Latinoamericano (4) Millán Márgara, Salcido Patricia y Cadena Jorge (compiladores) Siglo XXI, FCPyS, 2005. ISBN 968-23-25-68-4.'
    },
    {
      titulo: '“Tendencias de estudio de nacionalismo y mujeres”',
      text: 'Mujeres y nacionalismos en América Latina. De la Independencia al Nuevo Milenio, Gutiérrez N (ed), 2004. ISBN 970-32-14-12-6.'
    },
    {
      titulo: '“Mercadotecnia en el indigenismo de Vicente Fox”',
      text: 'El estado y los indígenas en tiempos del PAN, Rosalba Aída Hernández, Sarela Paz y Teresa Sierra (coord.), CIESAS, Miguel Angel Porrúa, H. Camara de Diputados LIX legislatura, 2004. ISBN 970 701 524.'
    },
    {
      titulo: '“Agentes de la modernidad en la resolución de conflictos. Los intelectuales y los líderes indígenas”',
      text: 'Chiapas, interpretaciones sobre la negociación y la paz, Arnson C., Manaut R.B. and Selee A. (eds), CISAN and Woodrow Wilson International Center for Scholars, 2003, México. ISBN 970 32 09 88 2.'
    },

    {
      titulo: '"Pasado e identidad histórica de los mayas contemporáneos”',
      text: 'Maya Survivalism. (Acta Mesoamericana), Hostettler, Ueli and Matthew Restall (eds.) Vol. 12 Markt Schwaben, Verlag A. Saurwein, 2001. ISBN 3 – 931419 06 1.'
    },
    {
      titulo: '“The Study of National Identity”',
      text: 'Modern Roots: Studies on National Identity Dieckhoff A. and Gutiérrez N (eds), Ashgate UNESCO, Hampshire 2001. ISBN 0 7546 1152 3.'
    },
    {
      titulo: '“Indigenism and Nationalism”',
      text: 'Encyclopedia of Nationalism, Smith A.D. y Leoussi Athena (eds.) Transaction Publishers New Jersey, 2001. ISBN 0 7658 0002 0.'
    },
    {
      titulo: '“South and Central America”',
      text: 'Encyclopedia of Nationalism, Vol 1, A. J. Motyl (ed) Academic Press, San Diego, 2001. ISBN-10: 0122272307.'
    },
    {
      titulo: '“El resurgimiento de la etnicidad y la condición multicultural del estado-nación de la era global”',
      text: 'Los retos de la etnicidad en los estados-nación del siglo XXI, Reina L (compiladora) CIESAS, INI; Miguel Angel Porrúa, 2001. ISBN 970 701 098 3.'
    },
    {
      titulo: '“Autonomía no es independencia: Los pueblos indios al fin del milenio”',
      text: 'Nacionalisme, debats i dilemmes per un nou.mil.leni, Guibernau M. (ed) PROA; Centre d´Etudis de Temes Contemporanis, Barcelona, 2000. ISBN 84 8256 817 5.'
    },
    {
      titulo: '“Ethnic Revivals within Nation States: The Theories of E. Gellner and A.D. Smith Revisited”',
      text: 'Rethinking Nationalism and Ethnicity. H.R. Wicker (ed), Berge, Oxford and New York, 1997. ISBN 185973 926 1 (cloth) 1 859 73 931 8 (paper).'
    },
    {
      titulo: '"Miscegenation as Nation-Building: Indigenous and Immigrant Women in Mexico"',
      text: 'Unsettling Settler Societies, Stasiulius D. y Yuval-Davis N. (eds) Sage Publications, 1995. ISBN 08039 86 939 (cloth) 08039 86 947 (paper).'
    },
    {
      titulo: '"Nacionalidades minoritarias y autonomía regional en la República Popular China"',
      text: 'Asociación Latinoamericana de Estudios Afroasiáticos, Quartucci G. (ed) Centro de Estudios de Africa y Asia, El Colegio de México, 1985.'
    },
  ]

  const articulos = [
    {
      titulo: 'Human Trafficking and Sex Industry: Does Ethnicity and Race Matter?, Journal of Intercultural Studies',
      text: '2014. Vol. 35, No. 2, 196–213. ISSN 0725-6868 (Print), 1469-9540',
      url: 'https://www.tandfonline.com/doi/full/10.1080/07256868.2014.885413',
    },
    {
      titulo: 'Multi-etnicidad y etno - nacionalismo en la República Popular China, Revista de Estudios de Asia y África, Vol., XLVI (1)',
      text: 'enero-abril, 2011: 9-34. ISSN: 0185-0164',
      url: '',
    },
    {
      titulo: '“Identidad nacional y sufrimiento colectivo. Arquetipos femeninos en la construcción del heroísmo”',
      text: 'Iconos. Revista de ciencias sociales. Volumen 14, (37) Mayo, 2010: 149 -159. ISSN: 1390 1249.',
      url: 'https://www.redalyc.org/articulo.oa?id=50918216011',
    },
    {
      titulo: '“Indigenous Political Organizations and the Nation-State. Bolivia, Ecuador, México”',
      text: 'Alternatives Journal. Volume 35. Issue 3, May 2010: 241-259. ISSN0304 3754.',
      url: 'https://journals.sagepub.com/doi/abs/10.1177/030437541003500305',
    },
    {
      titulo: '“Symbolic violence and sexualities in the myth making of Mexican national identity”',
      text: 'Ethnic and Racial Studies, Volume 31, Issue 3, March 2008: 524 – 542. ISSN 1354 5078.',
      url: 'https://www.tandfonline.com/doi/abs/10.1080/01419870701568809?journalCode=rers20',
    },
    {
      titulo: '“Patriotic Thoughts or Intuition: Roles of Women in Mexican Nationalism”',
      text: 'Nations and Nationalism. Special Issue Vol. 12. Part 2, April 2006: 339 – 358. ISSN.',
      url: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1469-8129.2006.00244.x',
    },
    {
      titulo: '“Un alto en el camino: La Revista Mexicana de Sociología en su 65 aniversario”',
      text: 'Revista Mexicana de Sociología, Número especial, 2004: XV - XXII.',
      url: '',
    },
    {
      titulo: '“Violencia Estructural y Masacres Genocidas: Chiapas (1997) y Agua Fría (2002)”',
      text: 'Estudios Sociológicos Vol. XXII (65) Mayo-Agosto, 2004: 315 - 348.',
      url: 'https://dialnet.unirioja.es/servlet/articulo?codigo=2192095',
    },
    {
      titulo: '“La autonomía y la resolución de conflictos étnicos: Los Acuerdos de San Andrés Larráinzar”',
      text: 'Nueva Antropología, Vol. XIX (63) Octubre, 2003: 11-39',
      url: 'https://revistas-colaboracion.juridicas.unam.mx/index.php/nueva-antropologia/article/view/15846/14167',
    },
    {
      titulo: '“Nacionalismos y etnocentrismos: la escritura maya de Briceida Cuevas y Flor Marlene Herrera”',
      text: 'Revista de Estudios de Género La Ventana, Universidad de Guadalajara Vol. 11 (18), 2003: 169 –209.',
      url: '',
    },
    {
      titulo: '“The Nation-State Against the Indigenous peoples: Acteal 1997 and Agua Fria 2001”',
      text: 'Cambridge Anthropology, Cambridge University, Vol. 23 (3), 2003: 39-52.',
      url: '',
    },
    {
      titulo: '“Mujeres-Patria-Nación”',
      text: 'Revista de Estudios de Género La Ventana, Universidad de Guadalajara (12) 2000: 209-243.',
      url: 'http://148.202.18.157/sitios/publicacionesite/pperiod/laventan/Ventana12/ventana12-7.pdf',
    },
  ]

  const ponencias = [
    {
      text: 'Integrante del Consejo Internacional de la revista Journal of Intercultural Studies, (Francis and Taylor, Universidad de Melborune, Australia, 2012).',
    },
    {
      text: '2001 – 2007 Dirección editorial Revista Mexicana de Sociología'
    },
    {
      text: '1991-1992: Comité editorial de The ASEN Bulletin.'
    },
    {
      text: 'Comité editorial de la revista Nations and Nationalism (Blackwell LSE)'
    },
    {
      text: 'Comité Editorial H-Net Network on Nationalism Studies H-NATIONALISM@H-NET.MSU.EDU'
    },
    {
      text: 'Editorial Advisory Committee News magazine Transcommunal Cooperation News, Santa Cruz.'
    },
    {
      text: 'Revista de Estudios Agrarios (Procuraduría de la Reforma Agraria).'
    },
  ]

  const docencia = [
    {
      text: 'Licenciatura en Desarrollo y Gestión Interculturales. Facultad de Filosofía y Letras y Centro Peninsular de Humanidades y Ciencias Sociales Universidad Nacional Autónoma de México.'
    },
    {
      text: 'Programa de Maestría en Antropología, Facultad de Filosofía y Letras / Instituto de Investigaciones Antropológicas, Universidad Nacional Autónoma de México. Estados y Grupos Étnicos en América Latina.'
    },
    {
      text: 'Maestría en Estudios Regionales. Instituto de Investigaciones Dr. José María Luis Mora. Región, etnicidad y nueva ruralidad. Primer Semestre.'
    },
  ]

  return (
    <Layout>
      <SEO
        title="Natividad Gutiérrez Chong | Sicetno Orgindal - Proyecto de investigación, pueblos indígenas, cultura política indígena"
        description="Natividad Gutiérrez Chong | SICETNO es una plataforma de consulta en línea para el estudio y desarrollo de la cultura política indígena. Instituto de Investigaciones Sociales, UNAM."
        image={imagenSeo}
      />
      <header className="md:pt-32">
        <h1 className="text-moradoSicetno text-6xl font-bold text-center my-10">Natividad Gutiérrez Chong</h1>
        <div className="container mx-auto px-10 md:px-5 text-justify leading-7">
          <p className="mb-6">
            Maestra y doctora en Sociología por la London School of Economics and Political Science, Universidad de Londres. Profesora e investigadora titular del Instituto de Investigaciones Sociales de la Universidad Nacional Autónoma de México. Ha coordinado desde 1983 más de veinte proyectos de investigación sobre nacionalismos y etnicidades en la República Popular China, México, Guatemala, Reino Unido, Bolivia y Ecuador. Es autora de numerosas publicaciones sobre conflictos étnicos, nacionalismos y multiculturalismo. Imparte docencia en la Maestría en Desarrollo Regional del Instituto Dr. José María Luis Mora; en el Instituto de Investigaciones Antropológicas y la Facultad de Filosofía y Letras así como en la Facultad de Ciencias Políticas y Sociales, UNAM.
          </p>
          <p className="mb-6">
            Miembro del Sistema Nacional de Investigadores Nivel III y miembro de la Academia Mexicana de Ciencias desde 2002.
          </p>
        </div>
      </header>
      <main className="container mx-auto px-10 text-justify leading-7">
        <section className="my-10">
          <h2 className="text-moradoSicetno text-4xl font-bold text-center my-10">Líneas de Investigacion</h2>
          <div className="flex flex-wrap justify-around">
            <div className="md:w-full md:mb-5 w-1/2">
              <div className="px-5">
                <div className="overflow-hidden rounded-2xl">
                  <Image fileName="natividad2.jpg" alt="Imagen de muchas madejas de hilos de colores" />
                </div>
                <div className="my-5 flex justify-center">
                  <a className="bg-naranjaSicetno text-white py-2 px-10 rounded-3xl shadow-lg transition duration-500 ease-in-out hover:bg-moradoSicetno transform hover:-translate-y-1 hover:scale-110 md:mb-10" target="_blank" rel="noopener noreferrer" href={cv}>
                    Curriculum Vitae
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-full w-1/2 flex justify-center items-center">
              <ul className="list-disc">
                {
                  lineas.map((item, index) => (
                    <li className="font-black text-3xl text-moradoSicetno my-5" key={index}>
                      {item.text}
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </section>
        <section className="mt-10 mb-40">
          <Tabs>
            <TabList>
              <Tab>Formación académica</Tab>
              <Tab>Investigaciones</Tab>
              <Tab>Publicaciones</Tab>
              <Tab>Ponencias y conferencias</Tab>
              <Tab>Docencia</Tab>
            </TabList>
            <TabPanel>
              <ul className="list-disc">
                {
                  formacion.map((item, index) => (
                    <li className="font-black" key={index}>
                      {item.text}
                    </li>
                  ))
                }
              </ul>
            </TabPanel>
            <TabPanel>
              <ul className="list-disc">
                {
                  investigacion.map((item, index) => (
                    <li className="font-black" key={index}>
                      {item.text}
                    </li>
                  ))
                }
              </ul>
            </TabPanel>
            <TabPanel>
              <div>
                <h2 className="text-moradoSicetno text-4xl font-bold text-center my-10">Libros arbitrados</h2>
                <div className="flex flex-wrap justify-around mt-5">
                  {
                    libros.map((item, index) => (
                      <article className="bg-blue-100 mx-2 my-2 w-96 px-8 py-8 rounded-2xl shadow-lg" key={index}>
                        <h3 className="text-moradoSicetno font-bold text-center my-5">{item.titulo}</h3>
                        <p>{item.editorial}</p>
                      </article>
                    ))
                  }
                </div>
              </div>
              <div>
                <h2 className="text-moradoSicetno text-4xl font-bold text-center my-10">Capítulos en libros arbitrados</h2>
                <div className="flex flex-wrap justify-around mt-5">
                  {
                    capitulos.map((item, index) => (
                      <article className="bg-green-100 mx-2 my-2 w-96 px-8 py-8 rounded-2xl shadow-lg" key={index}>
                        <h3 className="text-moradoSicetno font-bold text-center my-5">{item.titulo}</h3>
                        <p>{item.text}</p>
                      </article>
                    ))
                  }
                </div>
              </div>
              <div>
                <h2 className="text-moradoSicetno text-4xl font-bold text-center my-10">Artículos arbitrados</h2>
                <div className="flex flex-wrap justify-around mt-5">
                  {
                    articulos.map((item, index) => (
                      <article className="bg-yellow-100 mx-2 my-2 w-96 px-8 py-8 rounded-2xl shadow-lg" key={index}>
                        <h3 className="text-moradoSicetno font-bold text-center my-5">{item.titulo}</h3>
                        <p className="mb-4">{item.text}</p>
                        {
                          (item.url !== '')
                            ?
                            <div className="flex justify-center">
                              <a className="text-moradoSicetno font-bold" target="_blank" rel="noopener noreferrer" href={item.url}>Ver artículo</a>
                            </div>
                            :
                            <div className="flex justify-center">
                              <p className="text-moradoSicetno font-bold">No disponible</p>
                            </div>
                        }
                      </article>
                    ))
                  }
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <h2 className="text-moradoSicetno text-4xl font-bold text-center my-10">De 1982 a la fecha ha impartido 117 conferencias y ponencias</h2>
              <div>
                <ul className="list-disc">
                  {
                    ponencias.map((item, index) => (
                      <li className="font-black" key={index}>
                        {item.text}
                      </li>
                    ))
                  }
                </ul>
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <h2 className="text-moradoSicetno text-4xl font-bold text-center my-10">Labores docentes y de formación de recursos humanos</h2>
                <p className="text-moradoSicetno text-2xl font-bold text-center my-10">Profesora presencial de las asignaturas y seminarios</p>
              </div>
              <div>
                <ul className="list-disc">
                  {
                    docencia.map((item, index) => (
                      <li className="font-black" key={index}>
                        {item.text}
                      </li>
                    ))
                  }
                </ul>
              </div>
            </TabPanel>
          </Tabs>
        </section>
      </main>
    </Layout>
  )
}
