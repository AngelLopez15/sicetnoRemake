import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"

export default function Mapa() {
  return (
    <>
      {
        (typeof window !== 'undefined')
        ?
          <MapContainer
            center={[23.380964227121666, -99.16353656125003]} 
            zoom={5} 
            scrollWheelZoom={true} 
            style={{ height: 500, width: "100%" }}
          >
            <TileLayer 
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        :
        null
      }
    </>
  )
}
