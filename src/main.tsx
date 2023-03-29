import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./context/AuthProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LayoutRoot from "./components/common/LayoutRoot";
import ErrorPage from "./components/common/ErrorPage";
import MovieList from "./components/movies/MovieList";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "movies",
        element: <MovieList />,
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
