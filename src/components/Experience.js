import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import resume from '../files/Resume.pdf'

export default function Experience() {
  return (
    
    <section className='experience'>
      <div className='hiddenLeft'>
        <h3 className='title'>Recent Experiences</h3>
      </div>
      <section className='panels'>
        <div className='hiddenLeft'>
          <div className='experience1'>
            <StaticImage className='experience1pic'
                    src="../images/experience/ecoCar.png" 
                    alt="experience1pic" 
                    placeholder= "dominantColor"
            />
            <div className='info'>
              <h1>Software Stack Developer</h1>
              <h2>McMaster EcoCar Challenge</h2>
              <h4>Sep 2021 - Present</h4>
            </div>
          </div>
        </div>
        <div className='hiddenLeft'>
          <div className='experience2'>
            <StaticImage className='experience2pic'
                    src="../images/experience/mcmaster.png" 
                    alt="experience2pic" 
                    placeholder= "dominantColor"
            />
            <div className='info'>
              <h1>Engineering TA</h1>
              <h2>McMaster University</h2>
              <h4>Sep 2022 - Present</h4>
            </div>
          </div>
        </div>
        <div className='hiddenLeft'>
          <div className='experience3'>
            <StaticImage className='experience3pic'
                    src="../images/experience/mcscert.png" 
                    alt="experience3pic" 
                    placeholder= "dominantColor"
            />
            <div className='info'>
              <h1>Software Research Assistant</h1>
              <h2>McSCert</h2>
              <h4>May 2022 - Aug 2022</h4>
            </div>
          </div>
        </div>
      </section>

      <section className='experienceButtons'>
        <div className='hiddenLeft'>
          <a href='https://www.linkedin.com/in/sathurshan-arulmohan-01666b213/' target="_blank" rel="noreferrer noopener">
              <button className='linkedin'></button>
          </a>
        </div>

        <div className='hiddenLeft'>
          <a href={resume} download="Resume">
              <button className='resume'>Resume</button>
          </a>
        </div>
      </section>
    </section>
  )
}



