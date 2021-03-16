import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
// import L from 'leaflet'

import allAmerica from '../data/allAmerica.json'

// const myIcon = new L.icon({
//   iconUrl: require('../images/tapir2.png'),
//   iconSize: [69, 57],
//   iconAnchor: [69, 57],
//   popupAnchor: [-10, -30],
// });

const location = [20.380964227121666, -99.16353656125003]
const zoom = 3

let marcadores = allAmerica

export default function MapaAmerica() {
  return (
    <>
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
              marcadores.map((item, index) => (
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
