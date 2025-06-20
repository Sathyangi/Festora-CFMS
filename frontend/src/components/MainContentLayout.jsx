// src/components/MainContentLayout.jsx
import React from 'react';
// Imports the React library, essential for building UI components.

import { Routes, Route, useLocation } from 'react-router-dom';
// Imports Link component from React Router DOM for client-side navigation.

// Import all pages
import LeftMenuBar from './LeftMenuBar';
import HomePage from '../pages/HomePage';
import CulturalFestivalPage from '../pages/CulturalFestivalPage';
import ProductListingPage from '../pages/ProductListingPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import FestivalDetailPage from '../pages/FestivalDetailPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import AboutPage from '../pages/AboutPage';
import DonationPage from '../pages/DonationPage';
import CartPage from '../pages/CartPage'; 


const MainContentLayout = () => {
  // MainContentLayout is a functional React component
  const location = useLocation();// Hook from React Router that provides the current URL location object 
  const isHomePage = location.pathname === '/';// Checks if the current path is exactly '/' (the homepage) 

  return (
    // Renders the main layout container 
   // "d-flex flex-grow-1" are likely Bootstrap classes for a flex container that grows to fill available space 
    <div className="d-flex flex-grow-1">
      {!isHomePage && <LeftMenuBar />} {/* LeftMenuBar is conditionally rendered here */}
      
      <main className="flex-grow-1">
        <Routes>
          {/* Defines individual routes, mapping a URL path to a specific component */} 
          <Route path="/" element={<HomePage />} />
          <Route path="/festivals" element={<CulturalFestivalPage />} />
          <Route path="/cultural-festivals" element={<CulturalFestivalPage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/festivals/:id" element={<FestivalDetailPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/donate" element={<DonationPage />} />
          <Route path="/cart" element={<CartPage />} /> {/* New route for the cart page */}
          <Route path="*" element={<h1 className="text-center my-5">404 - Page Not Found</h1>} />
        </Routes>
      </main>
    </div>
  );
};

export default MainContentLayout;
// Exports the component so it can be used in other parts of the application.