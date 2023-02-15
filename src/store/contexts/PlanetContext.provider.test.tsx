import { render, screen } from "@testing-library/react";
import PlanetContextProvider from "./PlanetContext.provider";

describe("Given a PlanetContextProvider", () => {
  test("Should render children", () => {
    render(
      <PlanetContextProvider>
        <h1>Test</h1>
      </PlanetContextProvider>
    );
    const firstChildren = screen.getByText("Test");

    expect(firstChildren).toBeInTheDocument();
  });
});
