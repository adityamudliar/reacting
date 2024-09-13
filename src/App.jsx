import React from 'react'

import Contact from './assets/Components/Contact';
import Header from './assets/Components/Header';
import Home from './assets/Components/Home';
import Navbar from './assets/Components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
       <Routes>
       <Route path="/" element={ <Home/> } />
       <Route path="/contact" element={ <Contact/> } />
       <Route path="/Header" element={ <Header/> } />

       
       </Routes>
       </Router>
  )
}

export default App
