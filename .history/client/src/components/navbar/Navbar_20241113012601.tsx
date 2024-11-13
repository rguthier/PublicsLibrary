import "./NavBar.css";
import logo from "../../../public/favicon.svg";
import { Link } from "react-router-dom";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Adjust path to your Navbar component
import HomePage from "./components/HomePage"; // Example component
import BookPage from "./components/BookPage"; // Example component
import AddPage from "./components/AddPage"; // Example component
import LoginPage from "./components/LoginPage"; // Example component
import ErrorPage from "./components/ErrorPage"; // Example component


const Navbar = () => {
  return (
    <div className="navbar-links">
      <img src={logo} alt="" className="logo" />

      <div className="search-box">
        <input type="text" placeholder="Search Books..." />
        <i className="material-symbols-outlined"></i>
      </div>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Browse Books</li>
        <li>My Library</li>
        <li>Trade Requests</li>
        <li>Community</li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>

      <div className="person-acc">
        <i className="material-symbols-rounded"></i>
      </div>
    </div>
  );
};

export default Navbar;
