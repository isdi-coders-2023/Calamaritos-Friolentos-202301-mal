import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { MyFavorites } from "./MyFavorites";
import PlanetContextProvider from "../../store/contexts/PlanetContext.provider";
import { BrowserRouter } from "react-router-dom";

describe("Given a favorite planets component", () => {
  test("When rendering, then the favorite planets should be rendered", async () => {
    render(
      <PlanetContextProvider>
        <BrowserRouter>
          <MyFavorites />
        </BrowserRouter>
      </PlanetContextProvider>
    );

    await waitFor(() => {
      const planetCards = screen.getAllByRole("article");
      expect(planetCards).toHaveLength(3);
    });
  });
});
