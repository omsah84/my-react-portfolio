import React from 'react'
import './app.scss'
import Navigation from './components/navigation/Navigation.jsx';
// import Home from './components/home/Home.jsx'
// import About from './components/about/About.jsx';
// import Portfolio from './components/portfolio/Portfolio.jsx';
// import Skills from './components/skills/Skills.jsx';
// import Experience from './components/experience/Experience.jsx'
// import Education from './components/education/Education.jsx';
// import Testimonials from './components/testimonials/Testimonials.jsx';
// import Blog from './components/blog/Blog.jsx';
// import Contact from './components/contact/Contact.jsx';
// import Footer from './components/footer/Footer.jsx';

// import Resume from './components/resume/Resume.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function App() {
  return (
    <div className='app'>
     <Navigation/>
    </div>
  )
}
