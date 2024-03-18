import React from 'react'
import './about.scss'
// import imageAbout from './imageAbout.png'

export default function About() {
  return (
    <div className='about container p-5' id='about'>
      <h2 className='p-5'>About Us</h2>
      {/* <img src={imageAbout} alt='aboutimage' /> */}
      <div className='content'>
        <p>I'm Om Sah, a passionate Computer Science Engineering student and a dedicated full-stack developer. With a curious mind and a love for coding, I'm on a journey to explore the endless possibilities of technology. Join me as I strive to create innovative solutions that bridge the gap between imagination and reality.</p>
      </div>
    </div>
  )
}
