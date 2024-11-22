const Footer = () => (
  <footer style={{ backgroundColor: "#2e5339", color: "#f4f1ea", padding: "20px 0" }}>
    <div className="footer-content" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
      {/* Footer Logo and Description */}
      <div className="footer-section">
        <h2 style={{ color: "#f4f1ea" }}>Publics Library</h2>
        <p>Your go-to platform for trading books, connecting readers, and building communities.</p>
      </div>

      {/* Quick Links */}
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><a href="/home" style={footerLinkStyle}>Home</a></li>
          <li><a href="/browse-books" style={footerLinkStyle}>Browse Books</a></li>
          <li><a href="/my-library" style={footerLinkStyle}>My Library</a></li>
          <li><a href="/trade-requests" style={footerLinkStyle}>Trade Requests</a></li>
          <li><a href="/community" style={footerLinkStyle}>Community</a></li>
        </ul>
      </div>

      {/* Social Media Links */}
      <div className="footer-section">
        <h3>Follow Us</h3>
        <div className="social-links" style={{ display: "flex", gap: "15px" }}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/facebook-icon.png" alt="Facebook" style={socialIconStyle} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/twitter-icon.png" alt="Twitter" style={socialIconStyle} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/instagram-icon.png" alt="Instagram" style={socialIconStyle} />
          </a>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div style={{ textAlign: "center", marginTop: "20px", fontSize: "14px" }}>
      <p>&copy; 2024 Publics Library. All rights reserved.</p>
    </div>
  </footer>
);

// Inline styles for quick styling (replace with CSS if preferred)
const footerLinkStyle = {
  color: "#f4f1ea",
  textDecoration: "none",
  marginBottom: "10px",
  display: "block",
  transition: "color 0.3s ease",
};

const socialIconStyle = {
  width: "24px",
  height: "24px",
  transition: "transform 0.3s ease",
};

export default Footer;
