import React from 'react';
import Navbar from '../components/Navbar';
import { Footer } from './home';

function Careers() {
  return (
    <div className="page">
      <Navbar />

      <section className="section careers-hero">
        <div className="container--narrow" style={{ textAlign: 'center' }}>
          <p className="label fade-up">Join us</p>
          <h1 className="display fade-up fade-up-1" style={{ marginTop: 12 }}>
            Build the future<br /><em>with us</em>
          </h1>
          <p className="body-lg fade-up fade-up-2" style={{ marginTop: 20, maxWidth: 520, margin: '20px auto 0' }}>
            At PrintWindAI we're passionate about innovation, sustainability, and creating
            meaningful impact in the renewable energy sector.
          </p>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="container careers-grid">
          <div className="careers-values">
            <p className="label">Our culture</p>
            <h2 className="heading-xl" style={{ marginTop: 12 }}>What we stand for</h2>
            <ul className="careers-pillars">
              {[
                { icon: '⚡', heading: 'Move fast', body: 'We build, test, and iterate quickly — in the lab and in the field.' },
                { icon: '🌱', heading: 'Think long-term', body: 'Every decision is made with the planet and the next generation in mind.' },
                { icon: '◈',  heading: 'Own your work', body: "Small team, big responsibility. You'll have real impact from day one." },
              ].map((v, i) => (
                <li key={i} className="careers-pillar">
                  <span style={{ fontSize: '1.4rem' }}>{v.icon}</span>
                  <div>
                    <h3 className="heading-md">{v.heading}</h3>
                    <p className="body-md" style={{ marginTop: 4 }}>{v.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="careers-openings">
            <p className="label">Open roles</p>
            <div className="careers-empty">
              <p className="body-lg" style={{ marginTop: 12 }}>
                We're not actively hiring right now, but we're always excited to hear from
                talented people who share our vision.
              </p>
              <p className="body-md" style={{ marginTop: 16 }}>
                Send us your CV and a note about what you'd love to work on — we read every one.
              </p>
              <a
                href="mailto:support@printwindai.com"
                className="btn btn--primary"
                style={{ marginTop: 28 }}
              >
                Get in touch →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Careers;
