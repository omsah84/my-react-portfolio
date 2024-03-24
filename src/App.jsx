import React, {useState} from 'react'
import './app.scss'
import Navigation from './components/navigation/Navigation.jsx';



export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode? "light-mode":"dark-mode" }>
     <Navigation 
     darkMode = {darkMode} 
     handleDarkModeChange = {handleDarkModeChange}
     />
    </div>
  )
}
