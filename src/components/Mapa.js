import React, { useState } from 'react'
import "leaflet/dist/leaflet.css"
// import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import all from '../data/all.json'
import marcadores01 from '../data/marcadores01Recursos.json'
import marcadores02 from '../data/marcadores02Empresas.json'
import marcadores03 from '../data/marcadores03DerechosPueblos.json'
import marcadores04 from '../data/marcadores04ConflictosInteretnicos.json'
import marcadores05 from '../data/marcadores05Ambiente.json'

// const myIcon = new L.icon({
//   iconUrl: require('../images/tapir2.png'),
//   iconSize: [69, 57],
//   iconAnchor: [69, 57],
//   popupAnchor: [-10, -30],
// });

const location = [23.380964227121666, -99.16353656125003]
const zoom = 5

let marcadores = all

export default function Mapa() {

  const [state, setstate] = useState(0)

  const cambiarMarcadores = (conflicto) => {
    if(conflicto === 'Recursos') {
      marcadores = marcadores01
      setstate(state + 1)
    }else if(conflicto === 'Empresas') {
      marcadores = marcadores02
      setstate(state + 1)
    }else if(conflicto === 'Derechos') {
      marcadores = marcadores03
      setstate(state + 1)
    }else if(conflicto === 'Interetnicos') {
      marcadores = marcadores04
      setstate(state + 1)
    }else if(conflicto === 'Ambiente'){
      marcadores = marcadores05
      setstate(state + 1)
    }else if(conflicto === 'Todos'){
      marcadores = all
      setstate(state + 1)
    }
  }

  return (
    <>
      <div className="flex justify-around mb-10 md:flex md:flex-col md:mb-4">
        <button
          className="bg-naranjaSicetno text-white py-2 px-6 md:px-2 md:mb-5 rounded-3xl shadow-lg transition duration-500 ease-in-out hover:bg-moradoSicetno transform hover:-translate-y-1 hover:scale-110"
          onClick={() => cambiarMarcadores('Todos')}
        >
          Todos los conflictos
        </button>
        <button
          className="bg-naranjaSicetno text-white py-2 px-6 md:px-2 md:mb-5 rounded-3xl shadow-lg transition duration-500 ease-in-out hover:bg-moradoSicetno transform hover:-translate-y-1 hover:scale-110"
          onClick={() => cambiarMarcadores('Recursos')}
        >
          Eje I: Recursos naturales, territorio y desplazamiento
        </button>
        <button
          className="bg-naranjaSicetno text-white py-2 px-6 md:px-2 rounded-3xl shadow-lg transition duration-500 ease-in-out hover:bg-moradoSicetno transform hover:-translate-y-1 hover:scale-110"
          onClick={() => cambiarMarcadores('Empresas')}>
          Eje II: Empresas nacionales y transnacionales
        </button>
      </div>
      <div className="flex justify-around mb-6 md:flex md:flex-col md:mb-4">
        <button
          className="bg-moradoSicetno text-white py-2 px-6 md:px-2 md:mb-5 rounded-3xl shadow-lg transition duration-500 ease-in-out hover:bg-naranjaSicetno transform hover:-translate-y-1 hover:scale-110"
          onClick={() => cambiarMarcadores('Derechos')}
        >
          Eje III: Derechos de los pueblos indígenas
        </button>
        <button
          className="bg-moradoSicetno text-white py-2 px-6 md:px-2 md:mb-5 rounded-3xl shadow-lg transition duration-500 ease-in-out hover:bg-naranjaSicetno transform hover:-translate-y-1 hover:scale-110"
          onClick={() => cambiarMarcadores('Interetnicos')}
        >
          Eje IV: Conflictos Interétnicos
        </button>
        <button
          className="bg-moradoSicetno text-white py-2 px-6 md:px-2 rounded-3xl shadow-lg transition duration-500 ease-in-out hover:bg-naranjaSicetno transform hover:-translate-y-1 hover:scale-110"
          onClick={() => cambiarMarcadores('Ambiente')}
        >
          Eje V: Medio Ambiente
        </button>
      </div>
      <p className="invisible">{state}</p>
      <h2 className="text-moradoSicetno text-4xl font-bold text-center mb-10">Conflictos de México</h2>
      {
        (typeof window !== 'undefined')
          ?
          <MapContainer
            center={location}
            zoom={zoom}
            minZoom={5}
            maxZoom={17}
            scrollWheelZoom={true}
            style={{ height: 650, width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
              marcadores.map((item, index) => (
                <Marker key={index} position={item.location} >
                  <Popup>
                    <div className={item.nivel}>
                      <h3 className="text-center font-bold">{item.titulo}</h3>
                      <p className="text-center">{item.texto}</p>
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
