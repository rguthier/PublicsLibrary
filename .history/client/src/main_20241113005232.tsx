// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./index.css";
// import Root from "./routes/root";
// import ErrorPage from "./error";
// import Login from "./routes/login";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,  // Root component for the homepage
    errorElement: <ErrorPage />,  // Fallback error page
    children: [
      {
        path: "bookpage",  // This matches the URL "/bookpage"
        element: <BookPage />,  // Renders the BookPage component for "/bookpage"
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,  // Login page route
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
