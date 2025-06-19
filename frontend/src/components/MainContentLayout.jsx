// src/components/MainContentLayout.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Import your pages
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


const MainContentLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="d-flex flex-grow-1">
      {!isHomePage && <LeftMenuBar />} {/* LeftMenuBar is conditionally rendered here */}
      
      <main className="flex-grow-1">
        <Routes>
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
          <Route path="*" element={<h1 className="text-center my-5">404 - Page Not Found</h1>} />
        </Routes>
      </main>
    </div>
  );
};

export default MainContentLayout;