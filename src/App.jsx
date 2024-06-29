import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';

import Nav from './components/Nav.jsx';
import Bubbles from './components/Bubbles.jsx';
import Introduction from './components/Introduction.jsx';
import Skills from './components/Skills.jsx';
function App() {
  return (
   <>

      {/* <Bubbles/> */}
     <div className='mainContainer' >
    
      <Nav/>
      <Introduction/>
      <Skills/>
    </div>
   </>
  );
}

export default App;