import React from "react";
import { getSolarSystemPlanets } from "./api/planet.data";
import "./App.css";

function App() {
  getSolarSystemPlanets();
  return <div className="App"></div>;
}

export default App;
