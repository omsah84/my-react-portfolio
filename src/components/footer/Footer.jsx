import React from 'react'
import './footer.scss'
import { FaHeart } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className='footer'>
      <div class="copyright">
        <p> Copyright Om Sah, Made with <FaHeart className='text-danger' /> by Om Prakash Sah</p>
      </div>
    </div>
  )
}
