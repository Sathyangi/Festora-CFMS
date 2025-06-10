// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your global components (you'll create these next)
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import your main page components (you'll create these next)
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'; // For user registration
// import other pages as you create them:
// import FestivalListingPage from './pages/FestivalListingPage';
// import ProductListingPage from './pages/ProductListingPage';

import './App.css'; // For any custom global CSS you write

function App() {
  return (
    <Router> {/* This enables client-side routing */}
      <div className="d-flex flex-column min-vh-100"> {/* 'd-flex flex-column min-vh-100' are Bootstrap classes for a full-height, column layout, useful for sticky footers */}
        <Navbar /> {/* This component will be visible on all pages */}
        <main className="flex-grow-1"> {/* 'flex-grow-1' makes the main content area take up all available space */}
          <Routes> {/* Defines different routes for different URLs */}
            <Route path="/" element={<HomePage />} /> {/* Home page at root URL */}
            <Route path="/login" element={<LoginPage />} /> {/* Login page at /login */}
            <Route path="/register" element={<RegisterPage />} /> {/* Register page at /register */}

            {/* Placeholder for future routes: */}
            {/* <Route path="/festivals" element={<FestivalListingPage />} /> */}
            {/* <Route path="/products" element={<ProductListingPage />} /> */}
            {/* <Route path="/festival/:id" element={<FestivalDetailPage />} /> */}
          </Routes>
        </main>
        <Footer /> {/* This component will be visible on all pages */}
      </div>
    </Router>
  );
}

export default App;