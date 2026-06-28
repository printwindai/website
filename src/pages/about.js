import React from 'react';
import Navbar from '../components/Navbar';
import { Footer } from './home';

const team = [
  {
    name: 'Paul Marshall',
    role: 'CEO & Co-Founder',
    image: '/images/paul.png',
    bio: 'Leads company vision and strategy with a focus on innovation in wind turbine construction and sustainable infrastructure.',
  },
  {
    name: 'Srikant Santosh',
    role: 'CTO & Co-Founder',
    image: '/images/srik.png',
    bio: 'Leads software integration and business development, building the intelligence layer at the heart of the platform.',
  },
  {
    name: 'Dr Peter Mundy',
    role: 'COO & Co-Founder',
    image: '/images/pete.png',
    bio: `Oversees operations and project execution, ensuring every build delivers on PrintWindAI's quality and efficiency standards.`,
  },
];

function About() {
  return (
    <div className="page">
      <Navbar />

      {/* ── Header ── */}
      <section className="section about-header">
        <div className="container--narrow" style={{ textAlign: 'center' }}>
          <p className="label fade-up">The people</p>
          <h1 className="display fade-up fade-up-1" style={{ marginTop: 12 }}>
            Meet our <em>team</em>
          </h1>
          <p className="body-lg fade-up fade-up-2" style={{ marginTop: 20, maxWidth: 480, margin: '20px auto 0' }}>
            Four founders with deep roots in engineering, software, and operations —
            united by a belief that wind energy can be built faster and smarter.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* ── Team grid ── */}
      <section className="section">
        <div className="container">
          <ul className="about-team">
            {team.map((m, i) => (
              <li key={i} className="about-card">
                <div className="about-card__image">
                  <img src={m.image} alt={m.name} />
                </div>
                <div className="about-card__body">
                  <h2 className="heading-md" style={{ fontSize: '1.2rem' }}>{m.name}</h2>
                  <p className="label" style={{ marginTop: 4 }}>{m.role}</p>
                  <p className="body-md" style={{ marginTop: 14 }}>{m.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
