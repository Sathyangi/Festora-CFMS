/// src/components/Footer.jsx

import React from 'react';

function Footer() {
  return (
    <footer className="footer bg-dark text-light mt-auto py-3"> {/* Added mt-auto to push footer to bottom */}
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} Festora. All rights reserved.</p>
        <p>Follow us on:
          <a href="#" className="text-light mx-2">Facebook</a> |
          <a href="#" className="text-light mx-2">Instagram</a> |
          <a href="#" className="text-light mx-2">Twitter</a>
        </p>
        {/* Add more footer content here like privacy policy, terms, contact info */}
        <p>
          <a href="#" className="text-light mx-2">Privacy Policy</a> |
          <a href="#" className="text-light mx-2">Terms of Service</a> |
          <a href="#" className="text-light mx-2">Contact Us</a>
        </p>
      </div>
    </footer>
  );
}

// IMPORTANT: This line makes Footer the default export
export default Footer;