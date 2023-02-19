import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import { Details } from "../pages/Details/Details";
import { Home } from "../pages/Home/Home";
import LandingPage from "../pages/LandingPage/LandingPage";
import { MyFavorites } from "../pages/MyFavorites/MyFavorites";
import NotFound from "../pages/NotFound/NotFound";

export const router = createBrowserRouter([
  { path: "/", element: <LandingPage />, errorElement: <NotFound /> },
  {
    path: "/Main",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/Main",

        element: <Home />,
        errorElement: <NotFound />,
      },
      {
        path: "/Main/MyFavorites",
        element: <MyFavorites />,
        errorElement: <NotFound />,
      },
      {
        path: "details/:name",
        element: <Details />,
        errorElement: <NotFound />,
      },
    ],
  },
]);
