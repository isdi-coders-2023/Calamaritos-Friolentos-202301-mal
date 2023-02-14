import { render, screen } from "@testing-library/react";
import PlanetCard from "./PlanetCard";

describe("Given an card component", () => {
  test("When rendering the planet's name and image is displayed", () => {
    render(<PlanetCard />);
    const titleElement = screen.getByText("Mercury");
    const imageElemnt = screen.getByAltText("Planet Mercury");
    expect(titleElement).toBeInTheDocument();
    expect(imageElemnt).toBeInTheDocument();
  });
});
