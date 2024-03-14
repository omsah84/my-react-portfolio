import React from 'react'
import './app.scss'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/navigation/Navigation.jsx';
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx';
import Skills from './components/skills/Skills.jsx';
import Experience from './components/experience/Experience.jsx'
import Education from './components/education/Education.jsx';
import Testimonials from './components/testimonials/Testimonials.jsx';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
// import Resume from './components/resume/Resume.jsx';
import { useState } from 'react';



export default function App() {
 
  return (
    <div className='app'>
      <Navigation />
      <div className='section'>
        <Home />
        <About />
        <Portfolio />
        <Skills />
        <Experience />
        <Education />
        <Testimonials />
        <Blog />
        <Contact />
        <Footer className="footer"/>
      </div>

    </div>
  )
}
