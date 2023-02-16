import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./NavBar";

describe("NavBar component", () => {
  test("renders logo and favorites button links", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    const logoLink = screen.getByAltText("Space Safari icon");
    const favoritesLink = screen.getByText("My favorites");

    expect(logoLink).toBeInTheDocument();
    expect(favoritesLink).toBeInTheDocument();
  });
});
