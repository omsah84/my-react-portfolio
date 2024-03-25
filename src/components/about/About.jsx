import React from 'react'
import './about.scss'
import imageAbout from './imageAbout.png'
import Resume from "../../asset/Om-Resume.pdf";

export default function About() {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = Resume;
    link.download = 'Om-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div id='about'>
      <div className="left">
        <h2 className='text-center'>ABOUT ME</h2>
        <img src={imageAbout} alt='aboutimage' />
        <p>I'm Om Sah, a passionate Computer Science Engineering student and a dedicated full-stack developer. With a curious mind and a love for coding, I'm on a journey to explore the endless possibilities of technology. Join me as I strive to create innovative solutions that bridge the gap between imagination and reality.</p>
        <div className='but'>
          <button className='btn btn-primary mt-1 w-75' onClick={downloadResume}>Download Resume </button>
        </div>
      </div>
    </div>
  )
}
