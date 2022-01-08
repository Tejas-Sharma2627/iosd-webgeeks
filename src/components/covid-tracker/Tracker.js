import React, { useState, useEffect } from "react";
import "./Tracker.css";


const Tracker = () => {
  

  return (
    <div className="tracker">
      <div className="left-part">
      <div className="header">
          <h1>COVID-19 Tracker</h1>
          <h3>Dropdown</h3>
        </div>
        <div className="stats">
          <h3>New Cases</h3>
          <h3>Deaths</h3>
          <h3>Recovered</h3></div>
      </div>
    </div>
  );
};

export default Tracker;
