import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import useLocation

// Import your components
import Navbar from './components/Navbar';
import MainContentLayout from './components/MainContentLayout'; // ADDED: Import the new wrapper component

import Footer from './components/Footer';

// Import your custom global CSS file for styling
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      {/* ADDED: MainContentLayout will handle routing and conditional sidebar */}
      <MainContentLayout />
      <Footer />
    </Router>
  );
}

export default App;
