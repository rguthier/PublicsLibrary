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

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './NavBar.css';


// const Navbar = () => {
//   const open_book = "/open-book.png";

//   const [dropdownVisible, setDropdownVisible] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownVisible(!dropdownVisible);
//   };

//   return (
//     <div className='navbar-links'>
//       <img src={open_book} alt="" className='logo' />

//       <div className='search-box'> 
//         <input type='text' placeholder='Search Books...' />
//         <i className="material-symbols-outlined">search</i>
//       </div>

//       <ul>
//         <li>
//           <Link to="/" className="nav-link">
//             Home
//             <span className="navbar-underline"></span>
//           </Link>
//         </li>
//         <li>
//           <Link to="/browse-books" className="nav-link">
//             Browse Books
//             <span className="navbar-underline"></span>
//           </Link>
//         </li>
//         <li>
//           <Link to="/my-library" className="nav-link">
//             My Library
//             <span className="navbar-underline"></span>
//           </Link>
//         </li>
//         <li>
//           <Link to="/trade-requests" className="nav-link">
//             Trade Requests
//             <span className="navbar-underline"></span>
//           </Link>
//         </li>
//         <li>
//           <Link to="/community" className="nav-link">
//             Community
//             <span className="navbar-underline"></span>
//           </Link>
//         </li>
//       </ul>

//       <div className='person-acc' onClick={toggleDropdown}> 
//         <i className="material-symbols-rounded">person</i>
//         {dropdownVisible && (
//           <div className="dropdown-menu">
//             <Link to="/profile" className="dropdown-item">Profile</Link>
//             <Link to="/settings" className="dropdown-item">Settings</Link>
//             <Link to="/login" className="dropdown-item">Login</Link> 
//             <Link to="/logout" className="dropdown-item">Logout</Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Navbar;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  const open_book = "/open-book.png";

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="navbar-links">
      {/* Logo */}
      <img src={open_book} alt="Open Book Logo" className="logo" />

      {/* Search Box */}
      <div className="search-box">
        <input type="text" placeholder="Search Books..." />
        <i className="material-symbols-outlined">search</i>
      </div>

      {/* Navigation Links */}
      <ul>
        <li>
          <Link to="/" className="nav-link">
            Home
            <span className="navbar-underline"></span>
          </Link>
        </li>
        <li>
          <Link to="/browse-books" className="nav-link">
            Browse Books
            <span className="navbar-underline"></span>
          </Link>
        </li>
        <li>
          <Link to="/my-library" className="nav-link">
            My Library
            <span className="navbar-underline"></span>
          </Link>
        </li>
        <li>
          <Link to="/trade-requests" className="nav-link">
            Trade Requests
            <span className="navbar-underline"></span>
          </Link>
        </li>
        <li>
          <Link to="/community" className="nav-link">
            Community
            <span className="navbar-underline"></span>
          </Link>
        </li>
        {/* <li>
          <Link to="/login" className="nav-link">
            Login
            <span className="navbar-underline"></span>
          </Link>
        </li> */}
      </ul>

      {/* User Account Dropdown */}
      <div className="person-acc" onClick={toggleDropdown}>
        <i className="material-symbols-rounded">person</i>
        {dropdownVisible && (
          <div className="dropdown-menu">
            <Link to="/profile" className="dropdown-item">
              Profile
            </Link>
            <Link to="/settings" className="dropdown-item">
              Settings
            </Link>
            <Link to="/login" className="dropdown-item">
              Login
            </Link>
            <Link to="/logout" className="dropdown-item">
              Logout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
