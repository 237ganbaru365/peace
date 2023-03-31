import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";

import LayoutRoot from "./components/common/LayoutRoot";
import ErrorPage from "./components/common/ErrorPage";
import MovieDetail from "./components/movies/MovieDetail";
import Discover from "./pages/Discover";
import Category from "./pages/Category";

import { loader as discoverLoader } from "./pages/Discover";
import { loader as categoryLoader } from "./pages/Category";
import { loader as detailLoader } from "./components/movies/MovieDetail";

import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/movie",
        loader: discoverLoader,
        element: <Discover />,
      },
      {
        path: "/movie/:movieId",
        loader: detailLoader,
        element: <MovieDetail />,
      },
      {
        path: "/category/:genreId",
        loader: categoryLoader,
        element: <Category />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
