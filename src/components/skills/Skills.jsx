import React from 'react'
import './skills.scss'
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
export default function Skills() {
  return (
    <div className='skills' id='skills'>
      <div className="heading"><h2>Skills</h2></div>
      <div className='grid'>
        <div className='grid_item'>
          <HtmlIcon  className='icon'/>
          <h5>HTML</h5>
        </div>
        <div className='grid_item'>
          <CssIcon className='icon'/>
          <h5>CSS</h5>
        </div>
        <div className='grid_item'>
          <CssIcon className='icon'/>
          <h5>CSS</h5>
        </div>
        <div className='grid_item'>
          <CssIcon className='icon'/>
          <h5>CSS</h5>
        </div>
        <div className='grid_item'>
          <CssIcon className='icon'/>
          <h5>CSS</h5>
        </div>
        <div className='grid_item'>
          <JavascriptIcon className='icon'/>
          <h5>JavaScript</h5></div>
      </div>

    </div>
  )
}
