import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import { Navigater, Home, Case } from './components/index'

import './App.css';

function App() {
  return (
    <Fragment>
      <Router>        
        <Switch>
          <Route path='/case' component={Case} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;

