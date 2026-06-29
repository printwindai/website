import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Footer } from './home';

const solarModels = [
  {
    name: 'SolarRoll Small',
    tag: 'Compact',
    featuredIndex: true,
    badge: 'Most popular',
    dailyPower: '3 – 5 kWh',
    length: '3.5 m',
    width: '1.0 m',
    rollSize: '1.0 m × 100mm',
    deployTime: '< 30 sec',
    desc: 'Does not fit into a backpack, but it is the most portable model we make. Quick to deploy and ideal for powering essential equipment at remote sites.',
  },
  {
    name: 'SolarRoll T Design',
    tag: 'Standard',
    featuredIndex: false,
    badge: null,
    dailyPower: '6 – 10 kWh',
    length: '3.5 m',
    width: '2.0 m',
    rollSize: '1.0 m × 100mm',
    deployTime: '< 30 sec',
    desc: 'Double the width, double the power — but the same rolled-up size as the Small. More output without taking up any more space in transit.',
  },
  {
    name: 'SolarRoll Medium',
    tag: 'Pro',
    featuredIndex: false,
    badge: null,
    dailyPower: '12 – 15 kWh',
    length: '1.35 × 10',
    width: '1.35 m',
    rollSize: '1.35 m × 140mm',
    deployTime: '< 30 sec',
    desc: 'Maximum daily output for demanding construction sites and multi-device setups. Still deploys in under 30 seconds.',
  },
];

const crawlerFeatures = [
  { icon: '⬡', title: 'Modular design',    body: 'Ships in standard containers, adaptable to any tower size or terrain.' },
  { icon: '↑', title: 'Auto-climbing',     body: 'Traverses the tower side and prints each layer spiral by spiral.' },
  { icon: '◎', title: '360° imaging',      body: 'Panoramic capture powers live computer vision and structural analysis.' },
  { icon: '◈', title: 'Durable build',     body: 'Engineered for extreme weather, wind loading, and temperature swings.' },
  { icon: '⟐', title: 'Material agnostic', body: 'Dual-nozzle handles concrete, metal, clay — any printable material.' },
  { icon: '▷', title: 'Fast deployment',   body: 'Spiral printing means only cure time limits build speed.' },
  { icon: '◉', title: 'Real-time data',    body: 'Live diagnostics accessible remotely for full operational awareness.' },
];

function TabletDashboard() {
  const [charge, setCharge] = React.useState(73);

  // Simulate charge ticking up slowly
  React.useEffect(() => {
    const t = setInterval(() => {
      setCharge(c => {
        const next = c + (Math.random() > 0.5 ? 1 : 0);
        return next > 99 ? 62 : next;
      });
    }, 2800);
    return () => clearInterval(t);
  }, []);

  const chargeColor = charge > 60 ? '#3aaa62' : charge > 30 ? '#f59e0b' : '#ef4444';
  const bars = [42, 58, 51, 67, 74, 69, 80, charge];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Now'];
  const maxBar = Math.max(...bars);

  return (
    <div className="tablet-outer">
      {/* Tablet shell */}
      <div className="tablet-shell">
        {/* Camera dot */}
        <div className="tablet-camera" />

        {/* Screen */}
        <div className="tablet-screen">

          {/* Status bar */}
          <div className="tdb-statusbar">
            <span className="tdb-statusbar__title">SolarRoll</span>
            <div className="tdb-statusbar__right">
              <span className="tdb-statusbar__dot" style={{ background: '#3aaa62' }} />
              <span>Connected</span>
            </div>
          </div>

          {/* Battery ring */}
          <div className="tdb-battery-section">
            <div className="tdb-battery-ring">
              <svg viewBox="0 0 120 120" width="120" height="120">
                <circle cx="60" cy="60" r="50" fill="none" stroke="#1e2820" strokeWidth="10" />
                <circle
                  cx="60" cy="60" r="50"
                  fill="none"
                  stroke={chargeColor}
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 50}`}
                  strokeDashoffset={`${2 * Math.PI * 50 * (1 - charge / 100)}`}
                  transform="rotate(-90 60 60)"
                  style={{ transition: 'stroke-dashoffset 1.2s ease, stroke 0.6s ease' }}
                />
              </svg>
              <div className="tdb-battery-ring__label">
                <span className="tdb-battery-ring__pct" style={{ color: chargeColor }}>{charge}%</span>
                <span className="tdb-battery-ring__sub">Battery</span>
              </div>
            </div>

            <div className="tdb-battery-stats">
              <div className="tdb-stat">
                <span className="tdb-stat__val">2.4 kW</span>
                <span className="tdb-stat__key">Output now</span>
              </div>
              <div className="tdb-stat">
                <span className="tdb-stat__val">6.1 kWh</span>
                <span className="tdb-stat__key">Today total</span>
              </div>
              <div className="tdb-stat">
                <span className="tdb-stat__val">~3 h</span>
                <span className="tdb-stat__key">Full charge</span>
              </div>
            </div>
          </div>

          {/* Bar chart */}
          <div className="tdb-chart-section">
            <div className="tdb-chart-header">
              <span className="tdb-chart-title">Daily output</span>
              <span className="tdb-chart-unit">kWh</span>
            </div>
            <div className="tdb-chart">
              {bars.map((v, i) => (
                <div key={i} className="tdb-bar-col">
                  <div
                    className={`tdb-bar${i === bars.length - 1 ? ' tdb-bar--today' : ''}`}
                    style={{
                      height: `${(v / maxBar) * 100}%`,
                      background: i === bars.length - 1 ? chargeColor : '#2c3a2e',
                      transition: 'height 1s ease',
                    }}
                  />
                  <span className="tdb-bar-label">{days[i]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Alert row */}
          <div className="tdb-alerts">
            <div className="tdb-alert tdb-alert--ok">
              <span className="tdb-alert__dot" style={{ background: '#3aaa62' }} />
              Panel output optimal
            </div>
            <div className="tdb-alert">
              <span className="tdb-alert__dot" style={{ background: '#f59e0b' }} />
              Partly cloudy tomorrow
            </div>
          </div>

        </div>
        {/* Home bar */}
        <div className="tablet-homebar" />
      </div>
    </div>
  );
}

function Product() {
  const [activeModel, setActiveModel] = useState(0);

  return (
    <div className="page">
      <Navbar />

      {/* ── Sub-nav ── */}
      <div className="product-nav-strip">
        <div className="container">
          <a href="#solarroll" className="product-nav-link">SolarRoll</a>
          <span className="product-nav-sep">·</span>
          <a href="#tower-crawler" className="product-nav-link">Tower Crawler</a>
        </div>
      </div>

      {/* ══════════════════════════════
          SOLARROLL — HERO (primary)
      ══════════════════════════════ */}
      <section id="solarroll" className="section solarroll-hero-section">
        <div className="container product-two-col">
          <div className="product-two-col__text">
            <p className="label fade-up">Our flagship product</p>
            <h1 className="display fade-up fade-up-1">Solar<em>Roll</em></h1>
            <p className="body-lg fade-up fade-up-2">
              A rollable, ultra-portable solar array that deploys in under 30 seconds.
              Clean power anywhere — no diesel, no infrastructure, no delay.
            </p>
            <ul className="solarroll-bullets fade-up fade-up-3">
            
              <li>Deployed in under 30 seconds — every model</li>
              <li>Replaces diesel generators on remote sites</li>
              <li>No noise, no setup, no pollution — just roll out</li>
            </ul>
          </div>
          <div className="product-two-col__media fade-up fade-up-2">
            <img src="/images/solarrola-rolled.png" alt="SolarRoll rolled up for transport" className="product-media-img" />
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── vs Diesel callout ── */}
      <section className="section diesel-vs" style={{ background: 'var(--green-950)', padding: '64px 24px' }}>
        <div className="container diesel-vs__grid">
          <div className="diesel-vs__col diesel-vs__col--bad">
            <p className="diesel-vs__eyebrow">Traditional method</p>
            <h2 className="diesel-vs__heading">Diesel generator</h2>
            <ul className="diesel-vs__list">
              <li>Fuel costs add up daily</li>
              <li>Emissions on every site</li>
              <li>Heavy, loud, needs refuelling</li>
              <li>Supply chain dependency</li>
            </ul>
          </div>
          <div className="diesel-vs__divider">
            <span className="diesel-vs__badge">vs</span>
          </div>
          <div className="diesel-vs__col diesel-vs__col--good">
            <p className="diesel-vs__eyebrow">SolarRoll</p>
            <h2 className="diesel-vs__heading">Zero-emission power</h2>
            <ul className="diesel-vs__list diesel-vs__list--good">
              <li>No fuel costs, ever</li>
              <li>Zero emissions on site</li>
              <li>Deploys in under 30 seconds</li>
              <li>Works anywhere with sunlight</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── Gallery ── */}
      <section className="section" style={{ background: 'var(--slate-50)', paddingBottom: 80 }}>
        <div className="container">
          <div className="section-header">
            <p className="label">In the field</p>
            <h2 className="heading-xl">Deployed everywhere</h2>
          </div>
          <div className="solarroll-gallery solarroll-gallery--single">
            <div className="solarroll-gallery__main">
              <img src="/images/solarrola-grass.png" alt="SolarRoll panel rolled out on grass" className="product-media-img" />
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── Model cards ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="label">Product range</p>
            <h2 className="heading-xl">Choose your SolarRoll</h2>
            <p className="body-lg" style={{ maxWidth: 520 }}>
              Three models for different power needs — all deploy in under 30 seconds.
            </p>
          </div>

          <div className="model-cards">
            {solarModels.map((m, i) => (
              <div
                key={i}
                className={`model-card${m.featuredIndex ? ' model-card--featured' : ''}${activeModel === i ? ' model-card--active' : ''}`}
                onClick={() => setActiveModel(i)}
              >
                {m.badge && <span className="model-card__badge">{m.badge}</span>}
                <div className="model-card__body">
                  <span className={`model-card__tag${m.featuredIndex ? ' model-card__tag--light' : ''}`}>{m.tag}</span>
                  <h3 className={`heading-lg model-card__name${m.featuredIndex ? ' model-card__name--light' : ''}`}>{m.name}</h3>
                  <p className={`body-md model-card__desc${m.featuredIndex ? ' model-card__desc--light' : ''}`}>{m.desc}</p>
                  <dl className="model-card__stats">
                    <div className="model-stat">
                      <dt>Daily power</dt>
                      <dd>{m.dailyPower}</dd>
                    </div>
                    <div className="model-stat">
                      <dt>Length</dt>
                      <dd>{m.length}</dd>
                    </div>
                    <div className="model-stat">
                      <dt>Deploy</dt>
                      <dd>{m.deployTime}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════════════════
          TABLET DASHBOARD
      ══════════════════════════════ */}
      <div className="divider" />

      <section className="section tablet-section">
        <div className="container product-two-col product-two-col--flip">
          <div className="tablet-frame-wrap">
            <TabletDashboard />
          </div>
          <div className="product-two-col__text">
            <p className="label">Companion app</p>
            <h2 className="heading-xl">Full visibility, right in your hand</h2>
            <p className="body-lg" style={{ marginTop: 20 }}>
              Every SolarRoll ships with access to the PrintWindAI tablet dashboard —
              a real-time view of battery charge, power output, and daily energy generation.
            </p>
            <ul className="solarroll-bullets" style={{ marginTop: 24 }}>
              <li>Live battery level and charge rate</li>
              <li>Daily and weekly power output charts</li>
              <li>Multi-panel management from one screen</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          TOWER CRAWLER — secondary
      ══════════════════════════════ */}
      <div className="divider" />

      <section id="tower-crawler" className="section product-hero-section">
        <div className="container product-two-col">
          <div className="product-two-col__text">
            <p className="label fade-up">Also from PrintWindAI</p>
            <h2 className="display fade-up fade-up-1">Tower<br /><em>Crawler</em></h2>
            <p className="body-lg fade-up fade-up-2">
              A self-climbing robot that 3D-prints wind turbine towers entirely on site —
              layer by layer, spiral by spiral. No cranes. No large crews.
            </p>
          </div>
          <div className="product-two-col__media fade-up fade-up-2">
            <img src="/images/towercrawler-render.png" alt="Tower Crawler" className="product-media-img" />
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section" style={{ background: 'var(--slate-50)' }}>
        <div className="container">
          <div className="section-header">
            <p className="label">Capabilities</p>
            <h2 className="heading-xl">Built for the hardest conditions</h2>
          </div>
          <ul className="feature-grid">
            {crawlerFeatures.map((f, i) => (
              <li key={i} className="feature-card">
                <span className="feature-card__icon">{f.icon}</span>
                <h3 className="heading-md">{f.title}</h3>
                <p className="body-md">{f.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="divider" />

      <section className="section home-cta" style={{ textAlign: 'center' }}>
        <div className="container--narrow">
          <p className="label" style={{ color: 'var(--green-200)' }}>Get started</p>
          <h2 className="heading-xl" style={{ color: 'var(--white)', marginTop: 12 }}>
            Interested in SolarRoll or Tower Crawler?
          </h2>
          <p className="body-lg" style={{ color: 'var(--green-200)', marginTop: 16 }}>
            Talk to our team about the right model for your site and scale.
          </p>
          <a href="/contact" className="btn btn--primary" style={{ marginTop: 36, fontSize: '1rem', padding: '16px 36px' }}>
            Contact sales →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Product;
