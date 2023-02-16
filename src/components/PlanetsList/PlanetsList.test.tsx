import { render, screen, waitFor } from "@testing-library/react";
import PlanetContextProvider from "../../store/contexts/PlanetContext.provider";
import PlanetsList from "./PlanetsList";
import { BrowserRouter } from "react-router-dom";

describe("Given a planets list component", () => {
  test("When rendering, then three planets shoul be displayed", async () => {
    render(
      <PlanetContextProvider>
        <BrowserRouter>
          <PlanetsList />
        </BrowserRouter>
      </PlanetContextProvider>
    );

    await waitFor(() => {
      const planetCards = screen.getAllByRole("article");
      expect(planetCards).toHaveLength(3);
    });
  });
});
