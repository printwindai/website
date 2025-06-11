// src/pages/careers.js
import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';
import '../careers.css';

function Careers() {
  return (
    <div className="careers-page">
      <Navbar />
      <div className="careers-header">
        <h1>Join Our Dynamic Team</h1>
        <p>At PrintWindAI, we're passionate about innovation, sustainability, and creating meaningful impact in the renewable energy sector. Our team thrives on collaboration, creativity, and pushing the boundaries of what's possible.</p>
        <p>Although we are not currently hiring, we are always excited to connect with talented individuals who share our vision for a smarter, greener future. Please check back soon for opportunities to join our growing team.</p>
        <p>Interested in staying in touch? Feel free to reach out to us and let us know about your skills and aspirations!</p>
        <p>Contact us on <a href="mailto:support@printwindai.com">support@printwindai.com</a></p>
      </div>
    </div>
  );
}

export default Careers;
