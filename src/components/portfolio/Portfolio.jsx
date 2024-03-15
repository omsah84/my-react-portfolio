import React from 'react'
import './portfolio.scss'

export default function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
      <div className="heading"><h2>Portfolio</h2></div>
      <div className='grid'>
        <div className='cover'>Project 1</div>
        <div className='cover'>Project 2</div>
        <div className='cover'>Project 3</div>
        <div className='cover'>Project 4</div>
        <div className='cover'>Project 5</div>
        <div className='cover'>Project 6</div>
        <div className='cover'>Project 7</div>
        <div className='cover'>Project 8</div>
        <div className='cover'>Project 9</div>
      </div>
    </div>
  )
}
