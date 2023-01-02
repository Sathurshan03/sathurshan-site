import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { StaticImage } from "gatsby-plugin-image"


export default function Navbar() {
    
  return (
    <nav>     
        <div className='leftNav'>
            <StaticImage className='logo'
                src="../images/selfPictures/logo.png" 
                alt="Logo" 
                placeholder= "dominantColor"
                />
                <p>Sathurshan Arulmohan</p>
        </div>
        <div className='rightNav'>
            <AnchorLink to="/#home">  Home  </AnchorLink>   
            <AnchorLink to="/#experience">  Experiences  </AnchorLink>
            <AnchorLink to="/#skills">  Skills  </AnchorLink>
            <AnchorLink to="/#projectBoard">  Project Board  </AnchorLink>
        </div>
    </nav>
  )
}
