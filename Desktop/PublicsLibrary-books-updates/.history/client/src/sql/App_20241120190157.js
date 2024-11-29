import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar"; // Adjust path to your Navbar component
import BookPage from "./sqlpages/BookPage";
import Add from "./sqlpages/Add";
import Update from "./sqlpages/Update";
import ErrorPage from "./sqlpages/ErrorPage";
import SearchResults from "./components/SearchResults"; 

import "./addStyle.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/bookpage" element={<BookPage />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/search" element={<SearchResults />} /> 
          v

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
