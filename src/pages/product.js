// src/pages/product.js
import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';
import '../product.css';

function Product() {
  const advantages = [
    { title: 'Modular Design', description: 'Easily transportable and adaptable to various tower sizes and terrains.' },
    { title: 'Automated Climbing', description: 'Sophisticated climbing mechanism that can traverse the sides of the tower and print on each layer.'},
    { title: '360° Imaging', description: 'High-resolution panoramic capture for computer vision and improved design analysis.' },
    { title: 'Durable Materials', description: 'Engineered to withstand extreme environmental conditions.' },
    { title: 'Material Agnostic', description: 'Dual-Nozzle setup ideally for concrete and metal printing in situ but any material can be printed on site including clay.'},
    { title: 'Fast Deployment', description: 'Simple printing setup with an easy spiral setup. Each layer can be printed once cured on top with rapid deployment.' },
    { title: 'Real-time Data', description: 'Live feedback and diagnostics accessible remotely for optimal setup conditions with changing weather conditions.' },
  ];

  return (
    <div className="product-page">
      <Navbar />

      <section className="product-hero">
        <div className="product-text">
          <h1>PrintWind Tower Crawler</h1>
          <h2>Tower Crawler</h2>
          <p>The Tower Crawler is a smart, simple robot construction that is capable of building large wind turbines on site. The crawler has a patented, sophisticated design that can build layer upon layer on itself in quick succession and waits only for the concrete curing time.</p>
        </div>
        <div className="product-image">
          <img src="/images/tower-crawler.jpg" alt="Tower Crawler" />
        </div>
      </section>

      <section className="advantages-section">
        {advantages.map((item, index) => (
          <div className="advantage-row" key={index}>
            <div className="advantage-title">{item.title}</div>
            <div className="advantage-description">{item.description}</div>
          </div>
        ))}
      </section>

      <section className="ai-integration">
        <div className="ai-text">
          <h2>AI Integration</h2>
          <p>Our crawler leverages AI to identify structural weaknesses, changing weather conditions, automate fault detection, and improve the decision-making process through machine learning models trained on thousands of inspection records.</p>
        </div>
        <div className="ai-image">
          <img src="/images/ai-analysis.jpg" alt="AI Integration" />
        </div>
      </section>
    </div>
  );
}

export default Product;
