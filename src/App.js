import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import { renderRoutes } from 'react-router-config'

import createStore from './store/index'
import menuReducer from './reducers/themeReducer'
import Provider from './store/Provider'

import { Home, Case, Project, About } from './components/index'
import NavigaterCon from './containers/Nav'

import './App.css';


const store = createStore(menuReducer)


const routes = [
  {
    path: '/about',
    component: About,
  },{
    path: '/project',
    component: Project,
  },{
    path: '/case',
    component: Case,
  },{
    path: '/',
    component: Home
  }
]

function App() {
  return (
    <Provider store = {store}>
      <Router>        
        {/* <NavigaterCon /> */}
        {renderRoutes(routes)}
      </Router>
    </Provider>
  );
}

export default App;


