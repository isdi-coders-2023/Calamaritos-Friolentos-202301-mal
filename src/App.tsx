import React from "react";
import { getSolarSystemPlanets } from "./api/planet.data";
import "./App.css";
import PlanetContextProvider from "./store/contexts/PlanetContext.provider";

function App() {
  getSolarSystemPlanets();
  return (
    <div className="App">
      <PlanetContextProvider>
        <h1>hola</h1>
        <h2>adios</h2>
      </PlanetContextProvider>
    </div>
  );
}

export default App;
