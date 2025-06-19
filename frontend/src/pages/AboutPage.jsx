// src/pages/AboutPage.jsx

import React from 'react';
import { Card, Button } from 'react-bootstrap'; // Import Card and Button for consistency
import { Link } from 'react-router-dom'; // Import Link for navigation

/**
 * @function AboutPage
 * @description Renders a creative and engaging About Us page for FESTORA,
 * focusing on storytelling, mission, and the platform's offerings.
 * @returns {JSX.Element} The JSX for the About Page.
 */
function AboutPage() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 display-3 fw-bold text-primary animate__animated animate__fadeInDown">
        WELCOME TO FESTORA
      </h1>
      <h1 className="text-center mb-4 display-3 fw-bold text-primary animate__animated animate__fadeInDown">
      Unveiling Sri Lanka's Heartbeat
      </h1>
      <p className="text-center lead text-muted mb-5 animate__animated animate__fadeIn">
        More than a website, we're a celebration of tradition, spirit, and shared heritage.
      </p>

      {/* Storytelling/Origin Section */}
      <div className="row justify-content-center mb-5 animate__animated animate__fadeInUp">
        <div className="col-lg-10">
          <Card className="shadow-lg p-5 border-0 bg-light">
            <Card.Body>
              <h2 className="card-title text-center mb-4 display-6 fw-bold text-info">
                The Spark Behind FESTORA's Celebration
              </h2>
              <p className="card-text fs-5 text-justify">
                Imagine the rhythmic beat of a traditional drum echoing through ancient temples, the vibrant hues of a
                Vesak lantern illuminating the night, or the joyous laughter during a New Year game under the tropical sun.
                These are the moments that define Sri Lanka – moments steeped in devotion, history, and communal spirit.
              </p>
              <p className="card-text fs-5 text-justify mt-3">
                Our journey began with a simple idea: to bring these invaluable experiences closer to everyone, everywhere.
                We envisioned a digital space where the island's rich tapestry of **cultural and religious festivals**
                could be explored, understood, and cherished by both seasoned enthusiasts and curious newcomers. **FESTORA**
                is our ode to the resilience, beauty, and profound spiritual depth embedded in every Sri Lankan celebration.
              </p>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* Our Pillars Section - What We Offer, rephrased creatively */}
      <div className="row mb-5 animate__animated animate__fadeInUp delay-1s">
        <div className="col-12">
          <h2 className="text-center mb-5 display-6 fw-bold text-primary">FESTORA's Pillars of Purpose</h2>
        </div>
        {/* Pillar 1: Explore & Discover */}
        <div className="col-md-6 col-lg-4 mb-4">
          <Card className="h-100 shadow-sm text-center transform-on-hover">
            <Card.Body className="d-flex flex-column align-items-center">
              <i className="bi bi-compass fs-1 text-success mb-3 icon-bounce"></i>
              <h5 className="card-title fw-bold">Explore & Discover</h5>
              <p className="card-text flex-grow-1">
                Discover our comprehensive list of all Sri Lankan cultural and religious festivals. Learn about their history, what happens, and how to join in.
              </p>
            </Card.Body>
          </Card>
        </div>
        {/* Pillar 2: Connect & Collect */}
        <div className="col-md-6 col-lg-4 mb-4">
          <Card className="h-100 shadow-sm text-center transform-on-hover">
            <Card.Body className="d-flex flex-column align-items-center">
              <i className="bi bi-basket3 fs-1 text-warning mb-3 icon-bounce"></i>
              <h5 className="card-title fw-bold">Connect & Collect</h5>
              <p className="card-text flex-grow-1">
                Discover unique Sri Lankan handicrafts, traditional goods, and souvenirs. Our marketplace directly supports local artisans and preserves age-old skills.
              </p>
            </Card.Body>
          </Card>
        </div>
        {/* Pillar 3: Give & Grow */}
        <div className="col-md-6 col-lg-4 mb-4">
          <Card className="h-100 shadow-sm text-center transform-on-hover">
            <Card.Body className="d-flex flex-column align-items-center">
              <i className="bi bi-gift fs-1 text-danger mb-3 icon-bounce"></i>
              <h5 className="card-title fw-bold">Give & Grow</h5>
              <p className="card-text flex-grow-1">
                Extend the spirit of generosity.Contribute directly to vital humanitarian and cultural organizations across Sri Lanka, ensuring a lasting positive impact.
              </p>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* Call to Action - Engage */}
      <div className="text-center mt-5 animate__animated animate__fadeInUp delay-2s">
        <p className="fs-4 text-muted mb-4">Ready to immerse yourself in the magic of Sri Lanka with <b>FESTORA</b>?</p>
        <Link to="/cultural-festivals" className="btn btn-outline-primary btn-lg me-3">
          Start Your Discovery
        </Link>
        <Link to="/donate" className="btn btn-outline-success btn-lg">
          Support a Cause
        </Link>
      </div>

      {/* Basic Custom CSS for subtle animations and hover effects */}
      <style jsx>{`
        .transform-on-hover:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15) !important;
          transition: all 0.3s ease-in-out;
        }
        .transform-on-hover {
          transition: all 0.3s ease-in-out;
        }
        .icon-bounce {
          animation: bounce-in 0.8s; /* Simple bounce animation on load */
          animation-iteration-count: 1;
        }

        @keyframes bounce-in {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          70% {
            transform: scale(1.1);
            opacity: 1;
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}

export default AboutPage;