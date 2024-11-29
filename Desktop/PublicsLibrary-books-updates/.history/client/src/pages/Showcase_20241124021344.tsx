// src/components/Showcase.jsx

import "./Showcase.css";
import { Link } from "react-router-dom";
import backgroundImage from "../../public/book2.jpg"; // Adjust the path as needed

const Showcase = () => (
  <section
    className="showcase"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="showcase-content">
      <h1>Discover New Books</h1>
      <p>Explore our collection and find your next favorite read.</p>
      <Link to="/BrowseBookPage">
  <button className="cta-button">Browse Collection</button>
</Link>

    </div>
  </section>
);

export default Showcase;
