import React from 'react'
import "leaflet/dist/leaflet.css"
import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import all from '../data/all.json'
import tapir from '../images/tapir2.png'

// delete L.Icon.Default.prototype._getIconUrl

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// })

// const myIcon = L.icon({
//   iconUrl: tapir,
//   iconSize: [69,57],
//   popupAnchor: [-10, -30],
// });

const myIcon = new L.icon({
  iconUrl: require('../images/tapir2.png'),
  iconSize: [69,57],
  iconAnchor: [69, 57],
  popupAnchor: [-10, -30],
});


const location = [23.380964227121666, -99.16353656125003]
const zoom = 5

export default function Mapa() {
  return (
    <>
      {
        (typeof window !== 'undefined')
          ?
          <MapContainer
            center={location}
            zoom={zoom}
            scrollWheelZoom={true}
            style={{ height: 500, width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
              all.map((item, index) => (
                <Marker key={index} position={item.location} icon={myIcon}>
                  <Popup>
                    <h3>{item.titulo}</h3>
                    <p>{item.texto}</p>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">Ver más detalles</a>
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
