import './app.css';
import './Components/Section/section.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar.js';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';

export default function App () {

  return (
    <Router>
      <Navbar />


      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/skills" element={<Skills />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </Router>
  )
}
