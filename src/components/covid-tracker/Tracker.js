import React, { useState, useEffect } from "react";
import "./Tracker.css";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import InfoBox from "./InfoBox";
import LineGraph from "./LineGraph";
import Table from "./Table";
import { sortData, prettyPrintStat } from "./util";
import numeral from "numeral";
import Map from "./Map";
import "leaflet/dist/leaflet.css";

const Tracker = () => {
  

  return (
    <div className="tracker">
      
    </div>
  );
};

export default Tracker;
