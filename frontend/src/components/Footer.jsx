// src/components/Footer.jsx
import React from 'react';
// import './Footer.css'; // Optional: for custom styles

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container text-center">
        <span className="text-muted">© {new Date().getFullYear()} Festora. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;