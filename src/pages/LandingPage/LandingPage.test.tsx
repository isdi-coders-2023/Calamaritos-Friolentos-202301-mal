import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LandingPage from "./LandingPage";

describe("Given a Landing Page component", () => {
  test("When rendering the title, subtilte and home button link are displayed", () => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );

    const homeButton = screen.getByAltText("Next page button desktop");
    const appName = screen.getByText("Space Safari");

    expect(homeButton).toBeInTheDocument();
    expect(appName).toBeInTheDocument();
  });
});
