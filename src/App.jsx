import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';

import Nav from './components/Nav.jsx';
import Bubbles from './components/Bubbles.jsx';
import Introduction from './components/Introduction.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
function App() {
  return (
   <>

     <div className='mainContainer' >
     <Bubbles/>

      <Nav/>
      <Introduction/>
      <Skills/>
      <Projects/>
    </div>
   </>
  );
}

export default App;