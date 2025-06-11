import React from 'react';
import Navbar from '../components/Navbar';
import '../about.css'; // Ensure you have a CSS file for styling


const teamMembers = [
  {
    name: 'Paul Marshall',
    role: 'CEO & Co-Founder',
    image: '/images/paul.png',
    description: 'Leading the company vision and strategy, with a focus on innovation in wind turbine construction.'
  },
  {
    name: 'Joe Wills',
    role: 'Director of Engineering and Co-Founder',
    image: '/images/joe.png',
    description: 'Design and development of crawler motion'
  },
  {
    name: 'Srikant Santosh',
    role: 'CTO and Co-Founder',
    image: '/images/srik.png',
    description: 'Software Integration and business development.'
  },
  {
    name: 'Dr Peter Mundy',
    role: 'COO and Co-Founder',
    image: '/images/pete.png',
    description: 'Leading operations and ensuring efficient project execution.'
  }
];;

function About() {
  return (
    <div className="about-page">
      <Navbar />
      <h1 className="about-title">Meet Our Team</h1>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} />
            <div className="description">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
