import React from 'react'
import './home.scss'
import homeImage from './homeImage.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';


export default function Home() {
  return (
    <div className='home' id='home'>
      <div className='left'>
        {/* <div className="ima"></div> */}
        <h5>Hello, I am</h5>
        <h1>OM PRAKASH SAH</h1>
        <h2>I'm a <spam>Full Stack Web Developer </spam></h2>

        <div className="icon">
          <LinkedInIcon/>
          <GitHubIcon/>
          <EmailIcon/>
        </div>
        <div>
          <button>Download Resume <spam><DownloadIcon/></spam></button>
        </div>

      </div>
      <div className='right'>
        <div className="image">
          <img src={homeImage} alt='myimage' />
        </div>
      </div>
    </div>
  )
}
