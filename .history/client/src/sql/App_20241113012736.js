

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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Adjust path to your Navbar component
import HomePage from "./components/HomePage"; // Example component
import BookPage from "./components/BookPage"; // Example component
import AddPage from "./components/AddPage"; // Example component
import LoginPage from "./components/LoginPage"; // Example component

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar should be included here for all routes */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bookpage" element={<BookPage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
