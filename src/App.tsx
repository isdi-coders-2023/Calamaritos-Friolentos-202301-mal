import React from "react";
import { getSolarSystemPlanets } from "./api/planet.data";
import PlanetContextProvider from "./store/contexts/PlanetContext.provider";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/app-router";

function App() {
  getSolarSystemPlanets();
  return (
    <div className="App">
      <PlanetContextProvider>
        <RouterProvider router={router} />
        <h1>hola</h1>
        <h2>adios</h2>
      </PlanetContextProvider>
    </div>
  );
}

export default App;
