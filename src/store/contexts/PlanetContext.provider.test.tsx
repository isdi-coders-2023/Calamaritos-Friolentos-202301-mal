import { render, screen } from "@testing-library/react";
import PlanetContextProvider from "./PlanetContext.provider";

describe("Given a PlanetContextProvider", () => {
  test("Should render children", () => {
    render(
      <PlanetContextProvider>
        <h1>hola</h1>
      </PlanetContextProvider>
    );
    const firstChildren = screen.getByText("hola");

    expect(firstChildren).toBeInTheDocument();
  });
});
