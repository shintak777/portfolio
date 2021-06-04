import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import Link from 'react-router';

import About from './articles/About';
import Career from './articles/Career';
import Portfolio from './articles/Portfolio';
import MiniGame from './components/MiniGame';
import Github from './components/Github';

import './App.css';
import Sidebar from './Sidebar';

const App = () => {
  return (
    <div className="App" id="root">
      <Router>
     <Sidebar />
     <About />
     <Career />
     <Portfolio />
     <MiniGame />
     <Github />
     </Router>
    </div>
  );
}

export default App;
