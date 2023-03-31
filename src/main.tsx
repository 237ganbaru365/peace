import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";

import RequireAuth from "./components/auth/RequireAuth";
import LayoutRoot from "./components/common/LayoutRoot";
import ErrorPage from "./components/common/ErrorPage";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import MovieDetail from "./components/movies/MovieDetail";
import Discover from "./pages/Discover";

import "./index.scss";
import Category from "./pages/Category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/discover",
        element: <Discover />,
      },
      {
        path: "/discover/:movieId",
        element: <MovieDetail />,
      },
      {
        path: "/category/:genreId",
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
