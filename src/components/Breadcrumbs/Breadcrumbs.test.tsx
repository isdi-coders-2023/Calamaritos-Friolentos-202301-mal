import { render, screen } from "@testing-library/react";
import Breadcrumb from "./Breadcrumbs";

describe("Given a nav bar component", () => {
  const items = [
    { name: "Home", link: "/" },
    { name: "Favorites", link: "/Favorites" },
  ];

  test("When rendering, the breadcrumb is rendered with the number of items it receives", () => {
    render(<Breadcrumb items={items} />);
    const breadcrumbItems = screen.getAllByRole("listitem");

    expect(breadcrumbItems).toHaveLength(items.length);
  });

  test("When rendering, the last breadcrumb item is a text", () => {
    render(<Breadcrumb items={items} />);
    const lastBreadcrumb = screen.getByText(items[items.length - 1].name);

    expect(lastBreadcrumb).toBeInTheDocument();
  });
});
