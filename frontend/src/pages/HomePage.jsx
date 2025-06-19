// src/pages/HomePage.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

/**
 * @function HomePage
 * @description This component renders the main landing page of the application.
 * It features a hero section, event carousel, and featured products.
 * @returns {JSX.Element} The JSX for the Home Page.
 */

  //import specific festival images for featured festival images
   import vesakImage from '../assets/images/vesak1.jpg';
   import posonImage from '../assets/images/poson1.png';
   import thaiPongalImage from '../assets/images/thaipongal.jpg';
   import eidAlFitrImage from '../assets/images/eid.jpg';
   import christmasImage from '../assets/images/christmas.png';
   import sinhalaTamilNewYearImage from '../assets/images/awrudu.jpeg';

// Import specific product images for featured products section
import vesakLanternImage from '../assets/images/vesak4.jpg'; // Assuming you have these image files
import pottuImage from '../assets/images/kukum.png'; // Using the 'Tdrum.png' for the drum as per your ProductListingPage
import elephantImage from '../assets/images/woodenElephant.png'; // Using 'spices.jpg' for tea pack placeholder
    
function HomePage() {
  const featuredEvents = [
    // Replaced Peraheras with other significant religious/cultural festivals
    { id: '101', title: 'Vesak Poya Celebration', description: 'Celebrating the birth, enlightenment, and passing of Lord Buddha with lanterns and devotion.', imageUrl: vesakImage, religion: 'Buddhist', culture: 'Pan-Sri Lankan', location: 'Island-wide', date: 'May (Full Moon)' },
    { id: '102', title: 'Poson Poya Observance', description: 'Commemorating the introduction of Buddhism to Sri Lanka with pilgrimages and precepts.', imageUrl: posonImage, religion: 'Buddhist', culture: 'Pan-Sri Lankan', location: 'Mihintale & Island-wide', date: 'June (Full Moon)' },
    { id: '103', title: 'Thai Pongal Harvest Festival', description: 'Tamil Hindu harvest festival of gratitude to the Sun God with traditional Pongal cooking.', imageUrl: thaiPongalImage, religion: 'Hindu', culture: 'Tamil', location: 'Northern & Eastern Provinces', date: 'January' },
    { id: '104', title: 'Eid al-Fitr (Ramazan Festival)', description: 'Celebration marking the end of Ramadan, a month of fasting. Family gatherings and feasts.', imageUrl: eidAlFitrImage, religion: 'Muslim', culture: 'Islamic', location: 'Island-wide', date: 'Varies' },
    { id: '105', title: 'Christmas Celebrations', description: 'Observing the birth of Jesus Christ with church services, carols, and decorations.', imageUrl: christmasImage, religion: 'Christian', culture: 'Christian', location: 'Island-wide', date: 'December' },
    { id: '106', title: 'Sinhala & Tamil New Year', description: 'Major cultural festival marking the new year with traditional rituals, games, and sweets.', imageUrl: sinhalaTamilNewYearImage, religion: 'Multi-religious (Buddhist, Hindu)', culture: 'Sinhala, Tamil', location: 'Island-wide', date: 'April' },
  ];

  // Featured products, ensuring their IDs are strings for consistency with ProductListingPage
  const featuredProducts = [
    { id: '201', title: 'Vesak Lanterns', price: 'LKR 2500', imageUrl: vesakLanternImage, relatedTo: 'Cultural Festivals' },
    { id: '202', title: 'Kumkum Bindis', price: 'LKR 7000', imageUrl: pottuImage, relatedTo: 'Cultural Festivals' },
    { id: '203', title: 'WoodenElephant', price: 'LKR 1200', imageUrl: elephantImage, relatedTo: 'General' },
  ];

  // Inline style for hero section gradient and shadow
  const heroSectionStyle = {
    background: 'linear-gradient(45deg, #a8c0ff, #3f2b96)',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
    padding: '7rem 3rem',
    borderRadius: '1rem',
    position: 'relative',
    overflow: 'hidden',
  };

  // Inline style for hero section before pseudo-element (simulating ::before)
  const heroSectionBeforeStyle = {
    content: "''",
    position: 'absolute',
    top: '-50%', left: '-50%',
    width: '200%', height: '200%',
    background: 'rgba(255, 255, 255, 0.1)',
    transform: 'rotate(30deg)',
    zIndex: 1,
  };

  // Inline style for carousel caption
  const carouselCaptionStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: '0.5rem',
    padding: '15px 20px',
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)', // For Safari
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)',
  };

  // Inline style for card image
  const cardImgStyle = {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    borderTopLeftRadius: 'calc(0.75rem - 1px)',
    borderTopRightRadius: 'calc(0.75rem - 1px)',
    filter: 'brightness(0.95)',
    transition: 'filter 0.3s ease',
  };

  // Inline style for badge
  const badgeStyle = {
    fontSize: '0.85em',
    padding: '0.5em 0.7em',
    borderRadius: '0.35rem',
    display: 'inline-flex',
    alignItems: 'center',
    marginRight: '0.5rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    transition: 'all 0.2s ease',
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="p-5 mb-4 bg-light rounded-3 shadow-sm" style={heroSectionStyle}>
        <div style={heroSectionBeforeStyle}></div> {/* This simulates the ::before pseudo-element */}
        <div className="container-fluid py-5 text-center" style={{ position: 'relative', zIndex: 2 }}> {/* zIndex to ensure text is above pseudo-element */}
          <h1 className="display-5 fw-bold text-white mb-3" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Experience Sri Lankan Culture & Festivities</h1>
          <p className="col-md-8 fs-4 mx-auto text-white-75" style={{ lineHeight: 1.6 }}>
            Your unified platform for managing and exploring diverse cultural and religious
            festivals across Sri Lanka. Discover events, find unique products, and contribute
            to meaningful causes.
          </p>
          {/* Link to the Cultural Festivals page from the main hero button */}
          <Link to="/cultural-festivals" className="btn btn-primary btn-lg"
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#0056b3';
              e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#0d6efd';
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
            }}>
            Explore Festivals
          </Link>
        </div>
      </div>

      {/* Carousel Section - Using the new featuredEvents */}
      <div id="carouselExampleControls" className="carousel slide my-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          {featuredEvents.map((event, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={event.id}>
              <img src={event.imageUrl} className="d-block w-100" alt={event.title} style={cardImgStyle} />
              <div className="carousel-caption d-none d-md-block" style={carouselCaptionStyle}>
                <h5>{event.title}</h5>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Cultural Festivals Call to Action Section (Already correctly pointing) */}
      <div className="container my-5 text-center">
        <div className="bg-light p-5 rounded-3 shadow-sm">
          <h2 className="display-5 fw-bold text-primary">Experience Sri Lanka's Spiritual & Cultural Diversity</h2>
          <p className="fs-5 mt-3">
            Dive deeper into the island's rich tapestry of religious and cultural festivals,
            celebrated with profound devotion and vibrant traditions by all communities.
          </p>
          <Link className="btn btn-info btn-lg mt-4 text-white" to="/cultural-festivals" role="button">
            Explore Cultural Festivals
          </Link>
        </div>
      </div>

      {/* Featured Products Call to Action Section - NEW */}
      <div className="container my-5 text-center">
        <div className="bg-light p-5 rounded-3 shadow-sm">
          <h2 className="display-5 fw-bold text-success">Discover Unique Sri Lankan Products</h2>
          <p className="fs-5 mt-3">
            Browse a curated collection of authentic local handicrafts, traditional goods, and unique souvenirs,
            perfect for gifts or to adorn your home.
          </p>
          {/* Link to the Product Listing page */}
          <Link className="btn btn-success btn-lg mt-4 text-white" to="/products" role="button">
            Shop Products
          </Link>
        </div>
      </div>

      {/* Featured Upcoming Events (Now with non-perahera religious festivals) */}
      <div className="container my-5">
        <h2 className="text-center mb-4 display-6 fw-bold">Featured Upcoming Religious & Cultural Events</h2>
        <div className="row g-4">
          {featuredEvents.map(event => (
            <div className="col-md-6 col-lg-4" key={event.id}>
              <div className="card h-100 shadow-sm"
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)';
                  e.currentTarget.style.boxShadow = '0 1rem 2rem rgba(0, 0, 0, 0.2)';
                  e.currentTarget.style.borderColor = '#007bff';
                  e.currentTarget.querySelector('.card-img-top').style.filter = 'brightness(1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#dee2e6';
                  e.currentTarget.querySelector('.card-img-top').style.filter = 'brightness(0.95)';
                }}
              >
                <img src={event.imageUrl} className="card-img-top" alt={event.title} style={cardImgStyle} />
                <div className="card-body" style={{ position: 'relative', overflow: 'hidden' }}>
                  <h5 className="card-title fw-bold text-primary">{event.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    <i className="bi bi-geo-alt-fill me-1"></i> {event.location || 'Island-wide'} <i className="bi bi-calendar-event me-1 ms-2"></i> {event.date || 'Year-round'}
                  </h6>
                  <p className="card-text">{event.description}</p>
                  <div className="mt-2">
                    {event.religion && <span className="badge bg-primary me-1" style={badgeStyle}>{event.religion}</span>}
                    {event.culture && <span className="badge bg-info text-dark" style={badgeStyle}>{event.culture}</span>}
                  </div>
                  <div className="mt-3">
                    {/* Link to the Festival Detail Page */}
                    <Link to={`/festivals/${event.id}`} className="btn btn-sm btn-outline-primary">View Details</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Festival Products (retained from previous, links updated) */}
      <div className="container my-5">
        <h2 className="text-center mb-4 display-6 fw-bold">Featured Festival Products</h2>
        <div className="row g-4">
          {featuredProducts.map(product => (
            <div className="col-md-4" key={product.id}>
              <div className="card h-100 shadow-sm"
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)';
                  e.currentTarget.style.boxShadow = '0 1rem 2rem rgba(0, 0, 0, 0.2)';
                  e.currentTarget.style.borderColor = '#007bff';
                  e.currentTarget.querySelector('.card-img-top').style.filter = 'brightness(1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#dee2e6';
                  e.currentTarget.querySelector('.card-img-top').style.filter = 'brightness(0.95)';
                }}
              >
                <img src={product.imageUrl} className="card-img-top" alt={product.title} style={cardImgStyle} />
                <div className="card-body" style={{ position: 'relative', overflow: 'hidden' }}>
                  <h5 className="card-title fw-bold text-success">{product.title}</h5>
                  <p className="card-text fw-bold text-danger">Price: {product.price}</p>
                  <div className="mt-2">
                    {product.relatedTo && <span className="badge bg-success" style={badgeStyle}>{product.relatedTo}</span>}
                  </div>
                  <div className="mt-3">
                    {/* Link to the Product Detail Page */}
                    <Link to={`/products/${product.id}`} className="btn btn-sm btn-outline-success">View Details</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;