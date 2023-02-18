import Pagination from "./Pagination";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Given a pagination component", () => {
  test("when its rendered then two buttons are displayed", () => {
    render(
      <BrowserRouter>
        <Pagination />
      </BrowserRouter>
    );

    const leftButton = screen.getByAltText("Left page button");
    const rightButton = screen.getByAltText("Right page button");

    expect(leftButton).toBeInTheDocument();
    expect(rightButton).toBeInTheDocument();
  });

  test("when the left button is clicked once it should call a function", () => {
    render(<Pagination />);
    const goToLeftPage = jest.fn();
    const leftButton = screen.getByAltText("Left page button");
    fireEvent.click(leftButton, (onclick = goToLeftPage));
    expect(goToLeftPage).toHaveBeenCalledTimes(1);
  });

  test("when the tight button is clicked once it should call a function", () => {
    render(<Pagination />);
    const goToNextPage = jest.fn();
    const rightButton = screen.getByAltText("Right page button");
    fireEvent.click(rightButton, (onclick = goToNextPage));
    expect(goToNextPage).toHaveBeenCalledTimes(1);
  });
});
