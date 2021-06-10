import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import About from './articles/About';
import MiniGame from './components/MiniGame';
import './App.css';
import Sidebar from './Sidebar';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="App">
    <Router>
      <Sidebar />
      <Route path="About" component={About} />
      <Route path="/MiniGame" component={MiniGame} />
      <Route path="/Contact" component={Contact} />
    </Router>
    </div>
  );
}

export default App;