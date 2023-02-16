import { render, screen } from "@testing-library/react";
import PlanetCard from "./PlanetCard";
import { BrowserRouter } from "react-router-dom";

describe("Given an card component", () => {
  test("When rendering the planet's name and image is displayed", () => {
    render(
      <BrowserRouter>
        <PlanetCard
          name={"Mercury"}
          mass={0}
          radius={0}
          period={0}
          semi_major_axis={0}
          temperature={0}
          distance_light_year={0}
          host_star_mass={0}
          host_star_temperature={0}
        />
      </BrowserRouter>
    );
    const titleElement = screen.getByText("Mercury");
    const imageElemnt = screen.getByAltText("Planet Mercury");
    expect(titleElement).toBeInTheDocument();
    expect(imageElemnt).toBeInTheDocument();
  });
});
