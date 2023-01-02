import { graphql } from 'gatsby'
import React from 'react'
import "../styles/projectDetails.css"
import Layout from "../components/Layout"
import Img from "gatsby-image"

export default function projectDetails({ data }) {
    const { html } = data.markdownRemark
    const { title, slug, formatDate, summary, projectLink,  projectImg } = data.markdownRemark.frontmatter
  return (
    <Layout>
        <div className='projectTemplate'>
            <div className='title'>
              <h1>{ title }</h1>
              <h2>{ formatDate }</h2>
            </div>

            <div className='projectBody'>
              <div className="projectContainer">
                <Img fluid={projectImg.childImageSharp.fluid} 
                alt= { slug } 
                className="projectImage"/>
              </div>

              <div className='summary'>
                <h3>Overview</h3>
                <h4 className='summaryText'>{ summary }</h4>
                <a href= {projectLink} className= "linkButton"> 
                  <button className='linkProject'>Link To Project</button>
                </a>
              </div>
            </div>

            <div className='description'>
              <h3>Key Highlights</h3>
              <div className= "points" dangerouslySetInnerHTML={{__html: html}}/>
            </div> 
        </div>
    </Layout>
    
  )
}

export const query = graphql`
query ProjectsDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        slug
        formatDate
        summary
        projectLink
        projectImg{
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }`