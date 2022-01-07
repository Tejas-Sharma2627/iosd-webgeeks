import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";


function App() {
  const [progressbar, setprogressbar] = useState(0);
  const setProgress = (progress) => {
    setprogressbar(progress);
  };
  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar
            color="#f11946"
            progress={progressbar}
            height={'4px'}
          />
        <Switch>
          <Route exact path="/">
            <News setprogressbar ={setProgress} key="health" category="health"/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
