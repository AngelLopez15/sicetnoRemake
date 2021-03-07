import React from 'react'
import {graphql, StaticQuery} from "gatsby"
import Img from 'gatsby-image'

export default function Image(props) {

  const {fileName, alt} = props

  return (
    <StaticQuery
      query={graphql`
        query{
          images: allFile {
            edges {
              node {
                relativePath
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={data =>{
        const image = data.images.edges.find(image=>{
          return image.node.relativePath.includes(fileName)
        })
        if(!image) return null
        return <Img className="rounded-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" alt={alt} fluid={image.node.childImageSharp.fluid} />
      }}
    />
  )
  // El codigo de abajo solo sirve para traer una sola imagen
  // const data = useStaticQuery(graphql`
  //   query {
  //     image: file(relativePath: {eq:"telarhome.webp"}) {
  //       sharp: childImageSharp {
  //         fluid {
  //           src
  //         }
  //       }
  //     }
  //   }
  // `)

  // return <img src={data.image.sharp.fluid.src} alt="telar" />
}
