import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const sections = [
  {
    label: 'Simplicity',
    title: 'No noise. No setup. No pollution.',
    body: 'Go anywhere. No fuel, no fumes, no generators to wrangle — just roll up and roll out. SolarRola delivers clean, silent power the moment you arrive.',
    image: '/images/simplicity.jpeg',
  },
  {
    label: 'Economics',
    title: 'Lower cost than diesel — every single day.',
    body: 'Diesel generators burn money with every litre. SolarRola eliminates fuel spend, delivery logistics, and maintenance overheads, undercutting comparative diesel running costs while producing zero emissions.',
    image: '/images/OurGoals.jpeg',
  },
  {
    label: 'Mission',
    title: 'Reimagining portable off-grid energy storage',
    body: "A minimalist design that takes us to new sites that previously could not manage remote power — bridging noise concerns and offsetting carbon emissions, wherever the work goes.",
    image: '/images/netzero.jpeg',
  },
  {
    label: 'AI Power',
    title: 'Intelligent energy, tracked live',
    body: 'SolarRola tracks energy usage in real time, monitors battery power draw, and delivers live power analytics straight from the product — so you always know exactly what you have and what you are using.',
    image: '/images/AIsection.png',
  },
];

const stats = [
  { value: '<30s', label: 'Deploy time' },
  { value: '0', label: 'Emissions on site' },
  { value: 'Lower', label: 'Cost vs. diesel' },
  { value: 'Live', label: 'AI power analytics' },
];

function Home() {
  return (
    <div className="page">
      <Navbar />

      {/* ── Hero ── */}
      <section className="home-hero">
        <div className="container">
          <div className="home-hero__content">
            <p className="pill fade-up">☀ Clean energy — deployed in seconds</p>
            <h1 className="display fade-up fade-up-1">
              SolarRola,<br /><em>rolled out anywhere.</em>
            </h1>
            <p className="body-lg fade-up fade-up-2" style={{ maxWidth: 520 }}>
              SolarRola deploys clean power in under 30 seconds — replacing diesel generators on remote construction sites, off-grid infrastructure, and wind farm builds worldwide. No noise. No setup. No pollution.
            </p>
            <div className="home-hero__actions fade-up fade-up-3">
              <Link to="/product" className="btn btn--primary">See the product →</Link>
              <Link to="/contact" className="btn btn--outline">Talk to us</Link>
            </div>
          </div>
        </div>

        {/* Hero image strip */}
        <div className="home-hero__image">
          <img src="/images/solarrola-hero.jpg" alt="SolarRola portable solar mat deployed on site" />
          <div className="home-hero__image-overlay" />
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="home-stats">
        <div className="container">
          <ul className="home-stats__list">
            {stats.map((s) => (
              <li key={s.label} className="home-stats__item">
                <span className="home-stats__value">{s.value}</span>
                <span className="home-stats__label">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Feature sections ── */}
      {sections.map((s, i) => (
        <section key={i} className={`home-feature${i % 2 !== 0 ? ' home-feature--flip' : ''}`}>
          <div className="container home-feature__grid">
            <div className="home-feature__text">
              <p className="label">{s.label}</p>
              <h2 className="heading-xl" style={{ marginTop: 12 }}>{s.title}</h2>
              <p className="body-lg" style={{ marginTop: 20 }}>{s.body}</p>
            </div>
            <div className="home-feature__image">
              <img src={s.image} alt={s.title} />
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      <section className="home-cta">
        <div className="container--narrow" style={{ textAlign: 'center' }}>
          <h2 className="heading-xl">Ready to build the future?</h2>
          <p className="body-lg" style={{ marginTop: 16 }}>
            Get in touch with our team to discuss how SolarRola can power your next project.
          </p>
          <Link to="/contact" className="btn btn--primary" style={{ marginTop: 36 }}>
            Contact sales →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--slate-400)' }}>
          PrintWind<span style={{ color: 'var(--accent)' }}>AI</span>
        </span>
        <p className="body-md" style={{ fontSize: '0.85rem' }}>
          © {new Date().getFullYear()} PrintWindAI Ltd · <a href="mailto:support@printwindai.com" style={{ color: 'var(--accent)' }}>support@printwindai.com</a>
        </p>
      </div>
    </footer>
  );
}

export { Footer };
export default Home;
