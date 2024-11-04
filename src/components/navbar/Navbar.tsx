import "./NavBar.css";
import logo from "../../../public/favicon.svg";
const Navbar = () => {
  return (
    <div className="navbar-links">
      <img src={logo} alt="" className="logo" />

      <div className="search-box">
        <input type="text" placeholder="Search Books..." />
        <i className="material-symbols-outlined">search</i>
      </div>

      <ul>
        <li>Home</li>
        <li>Browse Books</li>
        <li>My Library</li>
        <li>Trade Requests</li>
        <li>Community</li>
      </ul>

      <div className="person-acc">
        <i className="material-symbols-rounded">person</i>
      </div>
    </div>
  );
};

export default Navbar;
