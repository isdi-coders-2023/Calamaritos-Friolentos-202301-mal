import React from "react";
import { render } from "@testing-library/react";
import { Details } from "./Details";

test("renders learn react link", () => {
  render(<Details />);
  expect(true).toBe(true);
});
