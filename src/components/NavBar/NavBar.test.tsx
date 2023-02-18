import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./NavBar";

describe("Given a nav bar component", () => {
  test("When rendering the logo and favorites button links is displayed", () => {
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
