import React from 'react'
import Button from './Button'
import { StaticImage } from "gatsby-plugin-image"


export default function About() {
  return (
    <section className='about'>
        <div className='Overview'>
          <h3>Hello, my name is Sathurshan!</h3>
          <p>I am a software engineering student at McMaster University who strives to develop efficient software and machinery that will serve and benefit my community. 
              You can find some of the projects I have worked on and learn more about me below.</p>
            <Button />
          <p className='scroll'>Scroll Down</p>
          <StaticImage className='downArrow'
                src="../images/miscellaneous/arrow.png" 
                alt="downArrow" 
                placeholder= "dominantColor"
                />
        </div>
        <div className='Portrait'>
            <StaticImage className='selfportrait'
                src="../images/selfPictures/portrait.png" 
                alt="portrait" 
                placeholder= "dominantColor"
                />
        </div>
    </section>
  )
}



