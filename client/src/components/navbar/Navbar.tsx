import "./NavBar.css";
import logo from "../../../public/favicon.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const removeToken = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className="navbar-links">
      <img src={logo} alt="" className="logo" />

      <div className="search-box">
        <input type="text" placeholder="Search Books..." />
        <i className="material-symbols-outlined">search</i>
      </div>

      <ul>
        <li>
          <Link to="/" className="nav-link">
            Home <span className="navbar-underline"></span>
          </Link>
        </li>
        <li>
          <Link to="/browse" className="nav-link">
            Browse Books <span className="navbar-underline"></span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="nav-link">
            Dashboard <span className="navbar-underline"></span>
          </Link>
        </li>
        <li style={{ color: "red" }} onClick={removeToken}>
          Logout
        </li>
      </ul>

      {/* <div className="person-acc" onClick={toggleDropdown}>
        <i className="material-symbols-outlined">person</i>
        {dropdownVisible && (
          <div className="dropdown-menu">
            <Link to="/dashboard" className="dropdown-item">
              Profile
            </Link>
            <Link to="/settings" className="dropdown-item">
              Settings
            </Link>
            <Link to="/logout" className="dropdown-item">
              Logout
            </Link>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Navbar;
