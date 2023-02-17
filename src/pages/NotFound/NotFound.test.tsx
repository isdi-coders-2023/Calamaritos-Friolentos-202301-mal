import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NotFound from "./NotFound";

describe("Given a Error page", () => {
  test("When a page is not found, an error page is rendered", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    const imageElement = screen.getByAltText("astronaut");
    const tittleElement = screen.getByText("ERROR 404");
    const textElement = screen.getByText(
      "Sorry, what you are looking for is beyond the limits of our galaxy."
    );
    const linkElement = screen.getAllByRole("link");

    expect(imageElement).toBeInTheDocument();
    expect(linkElement.length).toEqual(1);
    expect(tittleElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });
});
