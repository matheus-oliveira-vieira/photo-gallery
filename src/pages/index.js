import React from 'React'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Image from 'gatsby-image'
import '../assets/style.css'
import Header from '../components/Header'

const Index = () => {
  const images = useStaticQuery(graphql`
  query MyQuery {
    allFile {
      edges {
        node {
          childImageSharp {
            id
            fluid(maxHeight: 240, maxWidth: 480) {
              ...GatsbyImageSharpFluid
            }
          }
          relativePath
        }
      }
    }
  }
  `)
  return (
    <div>
      <Header />
      <div className='grid max-w-4xl grid-cols-2 gap-4 mx-auto '>
        {images.allFile.edges.map(image => {
          return (
            <div className='shadow'>
              <Link to={'/image/' + image.node.relativePath}>
                <Image className='rounded-t' fluid={image.node.childImageSharp.fluid} />
                <p className='p-6'>{image.node.relativePath}</p>
              </Link>
            </div>

          )
        })}
      </div>
      <div className='shadow-t-lg mt-6 p-6'>Feito com <b className='text-red-600'>&#10084;</b> por Matheus Oliveira</div>
    </div>
  )
}


export default Index