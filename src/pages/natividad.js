import React from 'react'
import Layout from '../layout/layout'
import Image from "../components/Image"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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

  return (
    <Layout>
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
                  <button className="bg-naranjaSicetno text-white py-2 px-10 rounded-3xl shadow-lg transition duration-500 ease-in-out hover:bg-moradoSicetno transform hover:-translate-y-1 hover:scale-110 md:mb-10">
                    Curriculum Vitae
                  </button>
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
              <ul>
                {
                  formacion.map((item, index) => (
                    <li key={index}>
                      {item.text}
                    </li>
                  ))
                }
              </ul>
            </TabPanel>
            <TabPanel>
              <h2>Investigaciones</h2>
            </TabPanel>
            <TabPanel>
              <h2>Publicaciones</h2>
            </TabPanel>
            <TabPanel>
              <h2>Ponencias y conferencias</h2>
            </TabPanel>
            <TabPanel>
              <h2>Docencia</h2>
            </TabPanel>
          </Tabs>
        </section>
      </main>
    </Layout>
  )
}
