import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import createStore from './store/index'
import menuReducer from './reducers/themeReducer'
import Provider from './store/Provider'

import { Home, Case, Project, About } from './components/index'
import NavigaterCon from './containers/Nav'

import './App.css';


const store = createStore(menuReducer)

function App() {
  return (
    <Provider store = {store}>
      <Router>        
        {/* <NavigaterCon /> */}
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/project' component={Project} />
          <Route path='/case' component={Case} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;


