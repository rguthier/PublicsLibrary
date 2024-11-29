// import "./NavBar.css";
// import logo from "../../../public/favicon.svg";
// import { Link } from "react-router-dom";


// const Navbar = () => {
//   return (
//     <div className="navbar-links">
//       <img src={logo} alt="" className="logo" />

//       <div className="search-box">
//         <input type="text" placeholder="Search Books..." />
//         <i className="material-symbols-outlined"></i>
//       </div>

//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>Browse Books</li>
//         <li>My Library</li>
//         <li>Trade Requests</li>
//         <li>Community</li>
//         <li>
//           <Link to="/login">Login</Link>
//         </li>
//       </ul>

//       <div className="person-acc">
//         <i className="material-symbols-rounded"></i>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import logo from "../../../public/favicon.svg";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${query}`);
      setQuery(""); 
    }
  };

  return (
    <div className="navbar-links">
      <img src={logo} alt="" className="logo" />

      <div className="search-box">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder=""
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">
            <i className="material-symbols-outlined">search</i>
          </button>
        </form>
      </div>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li><Link to="/bookpage">Browse Books</li>
        <li><Link to="/bookpage">My Library</Link></li>
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
