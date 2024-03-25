import React, { useState } from 'react'
import './app.scss'
import Navigation from './components/navigation/Navigation.jsx';
import Home from './components/home/Home.jsx';
import Testimonials from './components/testimonials/Testimonials.jsx'
import Skills from './components/skills/Skills.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx';
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from './components/footer/Footer.jsx';


export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle(!toggle);
  }

  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "light-mode" : "dark-mode"}>
      <Navigation
        darkMode={darkMode}
        handleDarkModeChange={handleDarkModeChange}
        toggle={toggle}
        toggleHandler={toggleHandler}
      />
      <Home />
      <Testimonials />
      <Skills />
      <Portfolio />
      <div className="section container">
        <div>  <About /> </div>
        <div> <Contact /> </div>
      </div>
      <Footer/>
    </div>
  )
}
