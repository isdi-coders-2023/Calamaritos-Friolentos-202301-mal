import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import { Home } from "../pages/Home/Home";
import { MyFavorites } from "../pages/MyFavorites/MyFavorites";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/MyFavorites",
        element: <MyFavorites />,
      },
    ],
  },
]);
