import React from "react";
import { render, screen } from "@testing-library/react";
import MainLayout from "./MainLayout";
import { BrowserRouter, Outlet } from "react-router-dom";
import { NavBar } from "../../components/NavBar/NavBar";

test("When rendering mainlayout, then navbar and outlet must be in the document", () => {
  render(
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
  const navBarImage = screen.getByAltText("Space Safari icon");
  expect(navBarImage).toBeInTheDocument();
});
