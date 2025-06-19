import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Ensure NavLink is imported for active styling

/**
 * @function Navbar
 * @description This functional component renders the application's navigation bar.
 * It includes branding and navigation links to different parts of the application.
 * Styling is applied via Bootstrap classes and custom CSS (assumed to be linked in index.html).
 * @returns {JSX.Element} A Bootstrap-styled navigation bar.
 */
function Navbar() {
  // Inline style for the navbar's background to ensure gradient applies.
  const navbarStyle = {
    background: 'linear-gradient(to right,rgb(12, 49, 57) 0%, #2575fc 100%)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    padding: '1rem 0',
  };

  // Inline style for the brand text.
  const brandStyle = {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 700,
    fontSize: '1.8rem',
    color: '#ffffff',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
  };

  // Base inline style for nav links (for onMouseOut)
  const navLinkBaseStyle = {
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: 500,
    marginLeft: '1.5rem',
    transition: 'color 0.3s ease, transform 0.3s ease',
    position: 'relative',
  };

  // Inline style for nav link hover effect
  const navLinkHoverStyle = {
    color: '#ffffff',
    transform: 'translateY(-3px)',
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-3 shadow" style={navbarStyle}>
      <div className="container">
        <Link className="navbar-brand" to="/" style={brandStyle}>
          FESTORA
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {/* Using NavLink with style function for active state */}
              <NavLink className="nav-link" to="/" end
                style={({ isActive }) => ({
                  ...navLinkBaseStyle,
                  color: isActive ? '#f8f9fa' : navLinkBaseStyle.color,
                  borderBottom: isActive ? '2px solid #f8f9fa' : 'none',
                  paddingBottom: '5px'
                })}
                onMouseOver={(e) => Object.assign(e.currentTarget.style, navLinkHoverStyle)}
                onMouseOut={(e) => Object.assign(e.currentTarget.style, navLinkBaseStyle)}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/festivals"
                style={({ isActive }) => ({
                  ...navLinkBaseStyle,
                  color: isActive ? '#f8f9fa' : navLinkBaseStyle.color,
                  borderBottom: isActive ? '2px solid #f8f9fa' : 'none',
                  paddingBottom: '5px'
                })}
                onMouseOver={(e) => Object.assign(e.currentTarget.style, navLinkHoverStyle)}
                onMouseOut={(e) => Object.assign(e.currentTarget.style, navLinkBaseStyle)}
              >
                Festivals
              </NavLink>
            </li>
            {/* NEW: Link to ProductListingPage */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/products"
                style={({ isActive }) => ({
                  ...navLinkBaseStyle,
                  color: isActive ? '#f8f9fa' : navLinkBaseStyle.color,
                  borderBottom: isActive ? '2px solid #f8f9fa' : 'none',
                  paddingBottom: '5px'
                })}
                onMouseOver={(e) => Object.assign(e.currentTarget.style, navLinkHoverStyle)}
                onMouseOut={(e) => Object.assign(e.currentTarget.style, navLinkBaseStyle)}
              >
                Products
              </NavLink>
            </li>
             {/* NEW: Donation Link */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/donate"
                style={({ isActive }) => ({
                  ...navLinkBaseStyle,
                  color: isActive ? '#f8f9fa' : navLinkBaseStyle.color,
                  borderBottom: isActive ? '2px solid #f8f9fa' : 'none',
                  paddingBottom: '5px'
                })}
                onMouseOver={(e) => Object.assign(e.currentTarget.style, navLinkHoverStyle)}
                onMouseOut={(e) => Object.assign(e.currentTarget.style, navLinkBaseStyle)}
              >
                Donate
              </NavLink>
            </li>
            {/* NEW: About Link */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/about"
                style={({ isActive }) => ({
                  ...navLinkBaseStyle,
                  color: isActive ? '#f8f9fa' : navLinkBaseStyle.color,
                  borderBottom: isActive ? '2px solid #f8f9fa' : 'none',
                  paddingBottom: '5px'
                })}
                onMouseOver={(e) => Object.assign(e.currentTarget.style, navLinkHoverStyle)}
                onMouseOut={(e) => Object.assign(e.currentTarget.style, navLinkBaseStyle)}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login"
                style={({ isActive }) => ({
                  ...navLinkBaseStyle,
                  color: isActive ? '#f8f9fa' : navLinkBaseStyle.color,
                  borderBottom: isActive ? '2px solid #f8f9fa' : 'none',
                  paddingBottom: '5px'
                })}
                onMouseOver={(e) => Object.assign(e.currentTarget.style, navLinkHoverStyle)}
                onMouseOut={(e) => Object.assign(e.currentTarget.style, navLinkBaseStyle)}
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register"
                style={({ isActive }) => ({
                  ...navLinkBaseStyle,
                  color: isActive ? '#f8f9fa' : navLinkBaseStyle.color,
                  borderBottom: isActive ? '2px solid #f8f9fa' : 'none',
                  paddingBottom: '5px'
                })}
                onMouseOver={(e) => Object.assign(e.currentTarget.style, navLinkHoverStyle)}
                onMouseOut={(e) => Object.assign(e.currentTarget.style, navLinkBaseStyle)}
              >
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;