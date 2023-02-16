import { render, screen, waitFor } from "@testing-library/react";
import PlanetContextProvider from "../../store/contexts/PlanetContext.provider";
import PlanetsList from "./PlanetsList";

describe("Given a planets list component", () => {
  test("When rendering, then three planets shoul be displayed", async () => {
    render(
      <PlanetContextProvider>
        <PlanetsList />
      </PlanetContextProvider>
    );

    await waitFor(() => {
      const planetCards = screen.getAllByRole("article");
      expect(planetCards).toHaveLength(3);
    });
  });
});
