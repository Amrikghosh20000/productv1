import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom';
import { HashRouter as Router } from "react-router-dom";
import './index.css'
import Navbar from './components/Navbar'
import FrontLanding from './Pages/landing.jsx'
import Colorpallte from './Pages/colorpallte.jsx';
import Duocolors from './Pages/duocolors.jsx';
import Tricolors from './Pages/tricolors.jsx';

function App() {


  return (
    <>
     <Router>
        <Routes>
          <Route path="" element={<FrontLanding />} />
          <Route path="color" element={<Colorpallte/>} />
          <Route path="duocolor" element={<Duocolors />} />
          <Route path="tricolor" element={<Tricolors />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
