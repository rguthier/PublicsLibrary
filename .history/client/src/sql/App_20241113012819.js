

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import BookPage from "./sqlpages/BookPage";
// import Add from "./sqlpages/Add";
// import Update from "./sqlpages/Update";
// import ErrorPage from "./sqlpages/ErrorPage";

// // Set up the routes
// const router = createBrowserRouter([
//   {
//     path: "/bookpage",
//     element: <BookPage />,
//     errorElement: <ErrorPage />, // Handles errors
//   },
//   {
//     path: "/add",
//     element: <Add />,
//   },
//   {
//     path: "/update/:id",
//     element: <Update />,
//   },
// ]);

// export default function App() {
//   return <RouterProvider router={router} />;
// }

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar"; // Adjust path to your Navbar component
import BookPage from "./sqlpages/BookPage";
import Add from "./sqlpages/Add";
import Update from "./sqlpages/Update";
import ErrorPage from "./sqlpages/ErrorPage";

// Set up the routes
const router = createBrowserRouter([
  {
    path: "/bookpage",
    element: <BookPage />,
    errorElement: <ErrorPage />, // Handles errors
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/update/:id",
    element: <Update />,
  },
]);

export default function App() {
  return (
    <div>
      <Navbar /> {/* Navbar should be placed outside the RouterProvider */}
      <RouterProvider router={router} />
    </div>
  );
}
