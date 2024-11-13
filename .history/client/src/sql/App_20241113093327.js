import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar"; // Adjust path to your Navbar component
import BookPage from "./sqlpages/BookPage";
import Add from "./sqlpages/Add";
import Update from "./sqlpages/Update";
import ErrorPage from "./sqlpages/ErrorPage";
import "./addStyle.css"



// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/bookpage" element={<BookPage />} />
//           <Route path="/add" element={<Add />} />
//           <Route path="/update/:id" element={<Update />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

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
//   return (
//     <div>
//       <Navbar /> {/* Navbar should be placed outside the RouterProvider */}
//       <RouterProvider router={router} />
//     </div>
//   );
// }
