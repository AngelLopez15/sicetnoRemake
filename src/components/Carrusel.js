import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function Carrusel(props) {

  console.log(props)
  const {frase1, frase2, frase3, frase4, frase5, frase6} = props

  return (
    <Carousel>
      <div>
        <img src={frase1} alt="Recomendacion 1" />
      </div>
      <div>
        <img src={frase2} alt="Recomendacion 2" />
      </div>
      <div>
        <img src={frase3} alt="Recomendacion 3" />
      </div>
      <div>
        <img src={frase4} alt="Recomendacion 4" />
      </div>
      <div>
        <img src={frase5} alt="Recomendacion 5" />
      </div>
      <div>
        <img src={frase6} alt="Recomendacion 6" />
      </div>
    </Carousel>
  )
}
