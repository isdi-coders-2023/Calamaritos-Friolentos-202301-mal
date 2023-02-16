import React from "react";
import PlanetContextProvider from "./store/contexts/PlanetContext.provider";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/app-router";
import "./App.css";

import PlanetsList from "./components/PlanetsList/PlanetsList";

function App() {
  return (
    <div className="container">
      <PlanetContextProvider>
        <RouterProvider router={router} />

        <div>
          <PlanetsList />
        </div>

      </PlanetContextProvider>
    </div>
  );
}

export default App;
