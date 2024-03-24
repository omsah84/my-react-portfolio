import React, { useState } from 'react'
import './app.scss'
import Navigation from './components/navigation/Navigation.jsx';
import Home from './components/home/Home.jsx';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
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
      <Home/>
    </div>
  )
}
