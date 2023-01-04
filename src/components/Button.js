import React from 'react'

export default function Button() {
  return (
    <div>
      <a href='https://www.linkedin.com/in/sathurshan-arulmohan-01666b213/' target="_blank" rel="noreferrer noopener">
          <button className='linkedin'/>
        </a>

        <a href='https://github.com/Sathurshan03' target="_blank" rel="noreferrer noopener">
          <button className='github'/>
        </a>
        
        <a href='mailto:arulmohs@mcmaster.ca' target="_blank" rel="noreferrer noopener">
          <button className='email'/>
        </a>

        <a href='https://schulichleaders.com/scholars/sathurshan-arulmohan/' target="_blank" rel="noreferrer noopener">
          <button className='schulich'/>
        </a>
    </div>
  )
}
