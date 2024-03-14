import React from 'react'
import './about.scss'
import imageAbout from './imageAbout.png'

export default function About() {
  return (
    <div className='about' id='about'>
      <h2>About Us</h2>
      <img src={imageAbout} alt='aboutimage' />
      <div className='content'>
        <p>Welcome to my corner of the web! I'm Om Sah, a passionate Computer Science Engineering student and a dedicated full-stack developer. With a curious mind and a love for coding, I'm on a journey to explore the endless possibilities of technology. Join me as I strive to create innovative solutions that bridge the gap between imagination and reality.</p>
      </div>
    </div>
  )
}
