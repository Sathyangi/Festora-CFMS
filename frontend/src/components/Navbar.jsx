// src/components/Navbar.jsx
import React from 'react';
// Ensure useLocation is imported here alongside Link and NavLink
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import useCart hook

function Navbar() {
    // This is the line where useLocation is used
    const location = useLocation(); // To handle NavLink active state properly on mouse out
    const { totalItems } = useCart(); // Get totalItems from cart context

    const navbarStyle = {
        background: 'linear-gradient(to right,rgb(12, 49, 57) 0%, #2575fc 100%)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        padding: '1rem 0',
    };

    const brandStyle = {
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 700,
        fontSize: '1.8rem',
        color: '#ffffff',
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
    };

    const navLinkBaseStyle = {
        color: 'rgba(255, 255, 255, 0.8)',
        fontWeight: 500,
        marginLeft: '1.5rem',
        transition: 'color 0.3s ease, transform 0.3s ease',
        position: 'relative',
        paddingBottom: '5px'
    };

    const navLinkHoverStyle = {
        color: '#ffffff',
        transform: 'translateY(-3px)',
    };

    const commonNavLinkStyle = (isActive) => ({
        ...navLinkBaseStyle,
        color: isActive ? '#f8f9fa' : navLinkBaseStyle.color,
        borderBottom: isActive ? '2px solid #f8f9fa' : 'none',
    });

    const onMouseOverHandler = (e) => {
        Object.assign(e.currentTarget.style, navLinkHoverStyle);
    };

    const onMouseOutHandler = (e) => {
        const linkPath = e.currentTarget.getAttribute('href');
        // Ensure that '/' also correctly matches the root if location.pathname is '/'
        const isCurrentlyActive = location.pathname === linkPath || (linkPath === '/' && location.pathname === '/');
        Object.assign(e.currentTarget.style, commonNavLinkStyle(isCurrentlyActive));
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
                            <NavLink
                                className="nav-link"
                                to="/"
                                end
                                style={({ isActive }) => commonNavLinkStyle(isActive)}
                                onMouseOver={onMouseOverHandler}
                                onMouseOut={onMouseOutHandler}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/festivals"
                                style={({ isActive }) => commonNavLinkStyle(isActive)}
                                onMouseOver={onMouseOverHandler}
                                onMouseOut={onMouseOutHandler}
                            >
                                Festivals
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/products"
                                style={({ isActive }) => commonNavLinkStyle(isActive)}
                                onMouseOver={onMouseOverHandler}
                                onMouseOut={onMouseOutHandler}
                            >
                                Products
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/donate"
                                style={({ isActive }) => commonNavLinkStyle(isActive)}
                                onMouseOver={onMouseOverHandler}
                                onMouseOut={onMouseOutHandler}
                            >
                                Donate
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/about"
                                style={({ isActive }) => commonNavLinkStyle(isActive)}
                                onMouseOver={onMouseOverHandler}
                                onMouseOut={onMouseOutHandler}
                            >
                                About Us
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/login"
                                style={({ isActive }) => commonNavLinkStyle(isActive)}
                                onMouseOver={onMouseOverHandler}
                                onMouseOut={onMouseOutHandler}
                            >
                                Login
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/register"
                                style={({ isActive }) => commonNavLinkStyle(isActive)}
                                onMouseOver={onMouseOverHandler}
                                onMouseOut={onMouseOutHandler}
                            >
                                Register
                            </NavLink>
                        </li>
                        {/* New Cart Link with Item Count */}
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/cart"
                                style={({ isActive }) => commonNavLinkStyle(isActive)}
                                onMouseOver={onMouseOverHandler}
                                onMouseOut={onMouseOutHandler}
                            >
                                <i className="bi bi-cart-fill me-1"></i> Cart
                                {totalItems > 0 && (
                                    <span className="badge bg-danger ms-1 rounded-pill">
                                        {totalItems}
                                    </span>
                                )}
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
