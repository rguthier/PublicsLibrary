// src/components/Showcase.jsx
import React from 'react';
import './Showcase.css';
import backgroundImage from '../assets/book2.jpg'; // Adjust the path as needed

const Showcase = () => (
  <section
    className="showcase"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      
    }}
  >
    <div className="showcase-content">
      <h1>Discover New Books</h1>
      <p>Explore our collection and find your next favorite read.</p>
      <button className="cta-button">Browse Collection</button>
    </div>
  </section>
);

export default Showcase;
