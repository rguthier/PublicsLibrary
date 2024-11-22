// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
// import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import "./index.css";
// import Root from "./routes/root";
// import ErrorPage from "./error";
// import Login from "./routes/login";
// import Navbar from "./components/navbar/Navbar";

// const Layout = () => (
//   <> 
//   <Navbar />
//   <Outlet />
//   </>
//   );
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

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Root from "./routes/root";
import Login from "./routes/login";
import ErrorPage from "./error";
import Community from "./pages/Community";
import BrowseBooks from "./pages/BrowseBooks";
import MyLibrary from "./pages/MyLibrary";
import Footer from "./pages/Footer";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar is always displayed */}
      <Navbar />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" element={<Login />} />
          <Route path="/community" element={<Community />} />
          <Route path="/browse-books" element={<BrowseBooks />} />
          <Route path="/my-library" element={<MyLibrary />} />
          <Route path="/trade-requests" element={<div>Trade Requests</div>} />
          <Route path="/profile" element={<div>Profile</div>} />
          {/* Wildcard Route for 404 Error */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/navbar/Navbar";
// import Root from "./routes/root";
// import Login from "./routes/login";
// import ErrorPage from "./error";
// import Community from './pages/community';
// import BrowseBooks from "./pages/BrowseBooks";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <div className="content-container">
//         <Routes>
//           <Route path="/" element={<Root />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/community" element={<Community />} />
//           <Route path="*" element={<ErrorPage />} />
//           <Route path="/browsebooks" element={<div>Browse Books</div>} />
//           <Route path="/my-library" element={<div>My Library</div>} />
//           <Route path="/trade-requests" element={<div>Trade Requests</div>} />
//           <Route path="/profile" element={<div>Profile</div>} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/navbar/Navbar";
// import Root from "./routes/root";
// import Login from "./routes/login";
// import ErrorPage from "./error";
// import Community from './pages/community';

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Root />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/community" element={<Community />} /> {/* Corrected */}
//         <Route path="*" element={<ErrorPage />} />
//         <Route path="/browse-books" element={<div>Browse Books</div>} />
//         <Route path="/my-library" element={<div>My Library</div>} />
//         <Route path="/trade-requests" element={<div>Trade Requests</div>} />
//         <Route path="/profile" element={<div>Profile</div>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/navbar/Navbar";
// import Root from "./routes/root";
// import Login from "./routes/login";
// import ErrorPage from "./error";
// import Community from "./routes/community";



// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Root />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="*" element={<ErrorPage />} />
//         <Route path="./routes/community" element={<div>Community</div>} />
//         <Route path="/browse-books" element={<div>Browse Books</div>} />
//         <Route path="/my-library" element={<div>My Library</div>} />
//         <Route path="/trade-requests" element={<div>Trade Requests</div>} />
//         <Route path="/profile" element={<div>Profile</div>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import "./index.css";
// import Root from "./routes/root";
// import ErrorPage from "./error";
// import Login from "./routes/login";
// import Navbar from "./components/navbar/Navbar";

// const Layout = () => (
//   <div>
//     <Navbar />
//     <main>
//       <Outlet />
//     </main>
//   </div>
// );

// const router = createBrowserRouter([
//   {
//     element: <Layout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/",
//         element: <Root />,
//       },
//       {
//         path: "/login",
//         element: <Login />,
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
