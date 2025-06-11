// src/pages/home.js
import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';

function Home() {
  const sections = [
    {
      title: 'Tower Crawler',
      description: 'Discover how PrintWindAI is revolutionizing wind farm placement using a simple and sophisticated 3D printing crawler that can be deployed in all terrain',
      image: '/images/towercrawler.png'
    },
    {
      title: 'Lower Costs and Higher Efficiency',
      description: 'Our solution leads to a 30% reduction in cost and significantly increases the efficiency of Printing leading to rapid build times with lower cost.',
      image: '/images/turbine.jpeg'
    },
    {
      title: 'Our Goals',
      description: 'We aim to revolutionise the  Wind Turbine Industry with out innovative solutions allowing for rapid deployment and lower costs. The minimalist design allows for esier transportation and the possibility of accessing more inaccessible areas of high wind speed.',
      image: '/images/OurGoals.jpeg'
    },
    {
      title: 'UK Net Zero Strategy',
      description: 'PrintWindAI is aligned with the UK’s 2050 Net-Zero strategy, contributing to national climate goals.',
      image: '/images/netzero.jpeg'
    },
    {
      title: 'AI Integrated Software',
      description: 'Our AI Software is integrated with the crawler setup and design, allowing for real-time data analysis and machine learning additionally the computer vision software allows live tracking of its surroundings',
      image: '/images/AIsection.png'
    }
  ];

  return (
    <div className="home-container">
      <Navbar />
      <div className="content-container">
        {sections.map((section, index) => (
          <section key={index} className={`info-section ${index % 2 === 0 ? 'bg-light' : 'bg-dark'}`}>
            <div className="info-text">
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </div>
            <div className="info-image">
              <img src={section.image} alt={section.title} />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Home;
