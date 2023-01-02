import React from 'react'

export default function Skills() {
  return (
    /*Images of skills are edited in mainPage.css*/ 
    <section className='skills'>
        <div className='hiddenRight'>
            <h3>My Top Skills</h3>
        </div>
        <section className='skillVisuals'>
            <div className='hiddenRight'>
                <div className='skill1'>
                    <div className='skillImageBackground1'></div>
                    <h1>Python</h1>
                </div>
            </div>
            <div className='hiddenRight'>
                <div className='skill2'>
                    <div className='skillImageBackground2'></div>
                    <h1>MATLAB</h1>
                </div>
            </div>
            <div className='hiddenRight'>
                <div className='skill3'>
                    <div className='skillImageBackground3'></div>
                    <h1>Java</h1>
                </div>
            </div>
            <div className='hiddenRight'>
                <div className='skill4'>
                    <div className='skillImageBackground4'></div>
                    <h1>Sensor Fusion</h1>
                </div>
            </div>
            <div className='hiddenRight'>
                <div className='skill5'>
                    <div className='skillImageBackground5'></div>
                    <h1>NLP</h1>
                </div>
            </div>
        </section>
    </section>
  )
}
