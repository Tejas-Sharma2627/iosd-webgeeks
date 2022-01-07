import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";
import Home from "./components/Home";

function App() {
  
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
              <Home/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
