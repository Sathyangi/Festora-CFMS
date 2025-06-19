//LeftMenuBar.jsx
import React from 'react'; //imports the core React library
import { NavLink, useLocation } from 'react-router-dom';

// Define consistent colors
const defaultLinkBgColor = '#a0c4ff'; // Changed to a slightly less light blue
const activeLinkBgColor = '#007bff'; // A standard primary blue
const defaultLinkTextColor = '#000000'; // Dark gray for non-active text
const activeLinkTextColor = '#ffffff'; // White for active text
const hoverLinkBgColor = '#495057'; // Darker background on hover
const hoverLinkTextColor = '#ffffff'; // White text on hover

// Base styles for all navigation links
const navLinkBaseStyle = {
    color: defaultLinkTextColor, // Default link text color
    backgroundColor: defaultLinkBgColor, // All links start with this light blue background
    transition: 'all 0.3s ease-in-out', // Smooth transition for changes
    fontSize: '16px',
    padding: '10px 15px', // Standard padding
    display: 'flex', // Enable flexbox for icon and text alignment
    alignItems: 'center', // Vertically align content
    gap: '10px', // Space between icon and text
    textDecoration: 'none', // Remove default underline
    borderRadius: '4px', // Slightly rounded corners
    margin: '4px 0', // Small vertical margin between items
};

// Styles for when the mouse hovers over a link
const navLinkHoverStyle = {
    backgroundColor: hoverLinkBgColor,
    color: hoverLinkTextColor,
};

const LeftMenuBar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    // Determines NavLink styles based on active state
    const commonNavLinkProps = (isActive) => ({
        ...navLinkBaseStyle, // Start with base styles 
        color: isActive ? activeLinkTextColor : defaultLinkTextColor, // Active text white, non-active text dark gray
        backgroundColor: isActive ? activeLinkBgColor : defaultLinkBgColor, //activeLinkBgColor Active link is prominent blue, others are light blue
        fontWeight: isActive ? 'bold' : 'normal', // Bold text for active
    });

    // Event handler for mouse entering the link area
    const onMouseOverHandler = (e) => Object.assign(e.currentTarget.style, navLinkHoverStyle);
    
    // Event handler for mouse leaving the link area, reverts to correct state (active or base)
    const onMouseOutHandler = (e) => {
        const isActive = location.pathname === e.currentTarget.getAttribute('href');
        Object.assign(e.currentTarget.style, commonNavLinkProps(isActive));
    };
  return (
     // Main navigation list container
     <ul className="navbar-nav flex-column me-auto p-2" style={{ width: '200px' }}>
     {/* Home Link */}
      <li className="nav-item">
        <NavLink
          className="nav-link" to="/" end // Ensures this link is only active when path is exactly '/'
          style={({ isActive }) => commonNavLinkProps(isActive)}
          onMouseOver={onMouseOverHandler}
          onMouseOut={onMouseOutHandler}>
          <span className="material-icons">🏠</span> {/* Home icon */}
          {isHomePage ? 'Home' : 'Back to Home Overview'}
          </NavLink>
          </li>


    {/* Festivals Link */}
       <li className="nav-item">
          <NavLink
            className="nav-link" to="/festivals"
              style={({ isActive }) => commonNavLinkProps(isActive)}
                onMouseOver={onMouseOverHandler}
                onMouseOut={onMouseOutHandler} >
                <span className="material-icons">🎉</span> {/* Festivals icon */}
                {isHomePage ? 'Festivals' : 'Explore Cultural Festivals'}
          </NavLink>
          </li>

   {/* Products Link */}
       <li className="nav-item">
         <NavLink
           className="nav-link" to="/products"
           style={({ isActive }) => commonNavLinkProps(isActive)}
           onMouseOver={onMouseOverHandler}
           onMouseOut={onMouseOutHandler}>
           <span className="material-icons">🛍️</span> {/* Products icon */}
           {isHomePage ? 'Products' : 'Discover Our Products'}
         </NavLink>
      </li>

   {/* Donate Link */}
      <li className="nav-item">
         <NavLink
           className="nav-link" to="/donate"
            style={({ isActive }) => commonNavLinkProps(isActive)}
            onMouseOver={onMouseOverHandler}
            onMouseOut={onMouseOutHandler}>
            <span className="material-icons">❤️</span> {/* Donate icon */}
            {isHomePage ? 'Donate' : 'Support Our Cause'}
         </NavLink>
      </li>


  {/* About Us Link */}
    <li className="nav-item">
       <NavLink
         className="nav-link" to="/about"
           style={({ isActive }) => commonNavLinkProps(isActive)}
           onMouseOver={onMouseOverHandler}
           onMouseOut={onMouseOutHandler}>
           <span className="material-icons">ℹ️</span> {/* About Us icon */}
           {isHomePage ? 'About Us' : 'Learn About Our Mission'}
       </NavLink>
    </li>

  {/* Login Link */}
   <li className="nav-item">
      <NavLink
         className="nav-link" to="/login"
          style={({ isActive }) => commonNavLinkProps(isActive)}
          onMouseOver={onMouseOverHandler}
          onMouseOut={onMouseOutHandler} >
          <span className="material-icons">🔒</span> {/* Login icon */}
          {isHomePage ? 'Login' : 'Access Your Account'}
      </NavLink>
   </li>

  {/* Register Link */}
    <li className="nav-item">
      <NavLink
        className="nav-link" to="/register"
          style={({ isActive }) => commonNavLinkProps(isActive)}
          onMouseOver={onMouseOverHandler}
          onMouseOut={onMouseOutHandler}>
          <span className="material-icons">📝</span> {/* Register icon */}
          {isHomePage ? 'Register' : 'Create New Account'}
       </NavLink>
    </li>
        
</ul>
    );
};

//JavaScript module export statement.
// makes the LeftMenuBar component available for other files to import and use
export default LeftMenuBar;