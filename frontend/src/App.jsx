// src/App.jsx
import React from 'react';
// Ensure BrowserRouter is imported from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'; // Or simply { BrowserRouter }
// Import your components
import Navbar from './components/Navbar';
import MainContentLayout from './components/MainContentLayout';
import Footer from './components/Footer';
// Import your CartProvider
import { CartProvider } from './context/CartContext';

// Import your custom global CSS file for styling
import './App.css';

function App() {
  return (
    <Router>
      {/* Wrap the entire application with CartProvider to make cart context available globally */}
      <CartProvider>
        <Navbar />
        {/* MainContentLayout handle routing and conditional sidebar */}
        <MainContentLayout />
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
