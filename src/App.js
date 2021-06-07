import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import About from './articles/About';
import Career from './articles/Career';
import Portfolio from './articles/Portfolio';
import MiniGame from './components/MiniGame';
import Github from './components/Github';

import './App.css';
import Sidebar from './Sidebar';
import { Home } from '@material-ui/icons';

const App = () => {
  return (
    <div className="App">
    <Router>
     <Sidebar />
    
      <Route path="/" component={Home} />
      <Route path="/About" component={About} />
      <Route path="Career" component={Career} />
      <Route path="Portfolio" component={Portfolio} />
      <Route path="MiniGame" component={MiniGame} />
      <Route path="Github" component={Github} />
    </Router>
    </div>
  );
}

export default App
