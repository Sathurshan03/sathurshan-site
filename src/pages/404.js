import React from 'react'
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/404.css"

export default function notFound() {
  return (
    <Layout>
        <div className='four04'>
              <StaticImage className='four04Pic'
                src="../images/selfPictures/404.png" 
                alt="four04Pic" 
                placeholder= "dominantColor"
                />
            <h3>404 Error!</h3>
            <h2>Sorry, Page not found...</h2>    
        </div>
    </Layout>
  )
}
