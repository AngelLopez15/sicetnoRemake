import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"

import allAmerica from '../data/allAmerica.json'
import allAmericaMarcadores01 from '../data/allAmerica01Recursos.json'
import allAmericaMarcadores02 from '../data/allAmerica02Empresas.json'
import allAmericaMarcadores03 from '../data/allAmerica03DerechosPueblos.json'
import allAmericaMarcadores04 from '../data/allAmerica04ConflictosInteretnicos.json'
import allAmericaMarcadores05 from '../data/allAmerica05Ambiente.json'

const location = [20.380964227121666, -99.16353656125003]
const zoom = 3

let marcadoresAmerica = allAmerica

export default function MapaAmerica() {

  const [stateAmerica, setStateAmerica] = useState(0)

  const cambiarMarcadoresAmerica = (conflicto) => {
    if (conflicto === 'Recursos') {
      marcadoresAmerica = allAmericaMarcadores01
      setStateAmerica(stateAmerica + 1)
    } else if (conflicto === 'Empresas') {
      marcadoresAmerica = allAmericaMarcadores02
      setStateAmerica(stateAmerica + 1)
    } else if (conflicto === 'Derechos') {
      marcadoresAmerica = allAmericaMarcadores03
      setStateAmerica(stateAmerica + 1)
    } else if (conflicto === 'Interetnicos') {
      marcadoresAmerica = allAmericaMarcadores04
      setStateAmerica(stateAmerica + 1)
    } else if (conflicto === 'Ambiente') {
      marcadoresAmerica = allAmericaMarcadores05
      setStateAmerica(stateAmerica + 1)
    } else if (conflicto === 'Todos') {
      marcadoresAmerica = allAmerica
      setStateAmerica(stateAmerica + 1)
    }
  }

  return (
    <>
      <div className="flex justify-around mb-10 md:flex md:flex-col md:mb-4">
        <button
          className="bg-naranjaSicetno text-white py-2 px-6 md:px-2 md:mb-5 rounded-3xl shadow-lg transition duration-500 ease-in-out hover:bg-moradoSicetno transform hover:-translate-y-1 hover:scale-110"
          onClick={() => cambiarMarcadoresAmerica('Todos')}
        >
          Todos los conflictos
        </button>
        <button
          className="bg-naranjaSicetno text-white py-2 px-6 md:px-2 md:mb-5 rounded-3xl shadow-lg transition duration-500 ease-in-out hover:bg-moradoSicetno transform hover:-translate-y-1 hover:scale-110"
          onClick={() => cambiarMarcadoresAmerica('Recursos')}
        >
          Eje I: Recursos naturales, territorio y desplazamiento
        </button>
        <button
          className="bg-naranjaSicetno text-white py-2 px-6 md:px-2 rounded-3xl shadow-lg transition duration-500 ease-in-out hover:bg-moradoSicetno transform hover:-translate-y-1 hover:scale-110"
          onClick={() => cambiarMarcadoresAmerica('Empresas')}>
          Eje II: Empresas nacionales y transnacionales
        </button>
      </div>
      <div className="flex justify-around mb-6 md:flex md:flex-col md:mb-4">
        <button
          className="bg-moradoSicetno text-white py-2 px-6 md:px-2 md:mb-5 rounded-3xl shadow-lg transition duration-500 ease-in-out hover:bg-naranjaSicetno transform hover:-translate-y-1 hover:scale-110"
          onClick={() => cambiarMarcadoresAmerica('Derechos')}
        >
          Eje III: Derechos de los pueblos indígenas
        </button>
        <button
          className="bg-moradoSicetno text-white py-2 px-6 md:px-2 md:mb-5 rounded-3xl shadow-lg transition duration-500 ease-in-out hover:bg-naranjaSicetno transform hover:-translate-y-1 hover:scale-110"
          onClick={() => cambiarMarcadoresAmerica('Interetnicos')}
        >
          Eje IV: Conflictos Interétnicos
        </button>
        <button
          className="bg-moradoSicetno text-white py-2 px-6 md:px-2 rounded-3xl shadow-lg transition duration-500 ease-in-out hover:bg-naranjaSicetno transform hover:-translate-y-1 hover:scale-110"
          onClick={() => cambiarMarcadoresAmerica('Ambiente')}
        >
          Eje V: Medio Ambiente
        </button>
      </div>
      <p className="invisible">{stateAmerica}</p>
      {
        (typeof window !== 'undefined')
          ?
          <MapContainer
            center={location}
            zoom={zoom}
            scrollWheelZoom={true}
            minZoom={3}
            maxZoom={17}
            style={{ height: 800, width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
              marcadoresAmerica.map((item, index) => (
                <Marker key={index} position={item.location}>
                  <Popup>
                    <div className={item.nivel}>
                      <h3 className="text-center font-bold">{item.titulo}</h3>
                      <p className="text-center">{item.texto}</p>
                      <p className="text-center">{item.region}</p>
                      <div className="flex justify-center">
                        <a href={item.url} target="_blank" rel="noopener noreferrer">Ver más detalles</a>
                      </div>
                    </div>
                  </Popup>
                </Marker>
              ))
            }
          </MapContainer>
          :
          <p>Cargando Mapa</p>
      }
    </>
  )
}
