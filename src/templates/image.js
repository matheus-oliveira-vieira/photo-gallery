import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Header from '../components/Header'
export default Image = ({ data }) => {
  return (
    <div>
      <Header />
      <Img fluid={data.file.childImageSharp.fluid} />
    </div>
  )
}
export const pageQuery = graphql`
  query($id: String!){
    file(relativePath: {eq: $id}){
      extension
      relativePath
      childImageSharp{
        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`