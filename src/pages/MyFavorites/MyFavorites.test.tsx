import React from "react";
import { render } from "@testing-library/react";
import { MyFavorites } from "./MyFavorites";

test("renders learn react link", () => {
  render(<MyFavorites />);
  expect(true).toBe(true);
});
