import { render, screen } from "@testing-library/react";
import PlanetContextProvider from "./PlanetContext.provider";

describe("Given a PlanetContextProvider", () => {
  test("Should render children", () => {
    render(
      <PlanetContextProvider>
        <h1>hola</h1>
        <h2>adios</h2>
      </PlanetContextProvider>
    );
    const firstChildren = screen.getByText("hola");
    const secondChildren = screen.getByText("adios");
    expect(firstChildren).toBeInTheDocument();
    expect(secondChildren).toBeInTheDocument();
  });
});
