import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";

import Login from "./components/Login.js";
import Header from "./components/Header.js";

export default function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        {/* Build out a Private Route for both Animal Dashboard + Add Animal*/}
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
};
