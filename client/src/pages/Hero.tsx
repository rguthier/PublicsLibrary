// src/components/Hero.jsx
import "../pages/Hero.css";
const Hero = ({ user }: { user: String }) => (
  <section className="hero">
    <div className="hero-content">
      <h1>Welcome to The Public's Library, {user}</h1>
      <p>Discover, trade, and share books with readers around the world.</p>
      <button className="cta-button">Get Started</button>
    </div>
  </section>
);

export default Hero;
