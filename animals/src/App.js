import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';

import Login from "./components/Login.js";
import Header from "./components/Header.js";
import AddAnimal from './components/AddAnimal';
import AnimalDashboard from './components/AnimalDashboard';

export default function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <PrivateRoute exact path='/creatures' component={AnimalDashboard} />
        <Route exact path="/login" component={Login} />
        <Route path ='/add' component={AddAnimal} />
      </Switch>
    </div>
  );
};
