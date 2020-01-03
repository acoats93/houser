import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, HashRouter, Link} from 'react-router-dom';
//components
import Header from './components/header/Header';
// import Dashboard from './components/dashboard/Dashboard';
// import Wizard from './components/wizard/Wizard';
import Routes from './routes';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Routes />
      </div>
    </HashRouter>
  );
}

export default App;
