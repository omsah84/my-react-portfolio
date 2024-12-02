import React from 'react'
import './home.scss'
import homeImage from "../../asset/homeImage.png";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

import Resume from "../../asset/Om-Resume.pdf";


export default function Home() {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = Resume;
    link.download = 'Om-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id='home' className='container-lg p-5' >
      <div className='left'>
        <h5>Hello, I am</h5>
        <h1>OM PRAKASH SAH</h1>
        <h2>I'm a <spam>Full Stack Web Developer </spam></h2>

        <div className="icon">
          <a href='https://www.linkedin.com/in/omsah84' target='-blank' > <LinkedInIcon /></a>
          <a href='https://www.github.com/omsah84' target='-blank'> <GitHubIcon /></a>
          <a href='mailto:huncyoms@gmail.com' target='-blank'> <EmailIcon /></a>
        </div>
        <div>
          <button className='btn btn-primary mt-1' onClick={downloadResume}>Download Resume </button>
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
