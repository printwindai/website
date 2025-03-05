import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../App.css'; // Use App.css for styling

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'Latest Project',
    'Case Study',
    'Our Goals',
    'UK Gov Alignment',
    'International Development',
    'Ethics Statement',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds (adjust as needed)

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [slides.length]);

  return (
    <div className="home-container">
      <Navbar />
      <div className="content-container">
        <div className="header-section">
\
          <h2 className="header-subtitle">Build where it blows!</h2>
          <p className="news-feed-title">News feed...</p>
        </div>

        <div className="slide-section">
          <div className="slide-content">
            {slides[currentSlide]}
          </div>
        </div>

        <div className="tiles">
          <div className="tile">Working With Us</div>
          <div className="tile">Case Studies</div>
          <div className="tile">Our Goals</div>
          <div className="tile">UK Gov Alignment</div>
          <div className="tile">International Development</div>
          <div className="tile">Statement of Ethics</div>
        </div>
      </div>
    </div>
  );
}

export default Home;