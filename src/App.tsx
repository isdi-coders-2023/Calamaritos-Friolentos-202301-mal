import React from "react";
import PlanetContextProvider from "./store/contexts/PlanetContext.provider";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/app-router";
import "./App.css";

function App() {
  return (
    <div className="container">
      <PlanetContextProvider>
        <RouterProvider router={router} />
      </PlanetContextProvider>
    </div>
  );
}

export default App;
