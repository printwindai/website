import React from 'react';
import Navbar from '../components/Navbar';
import { Footer } from './home';

const posts = [
  {
    title: 'How SolarRola changes the game for portable coffee vendors',
    summary: 'Mobile baristas have always been tethered to noisy, fume-belching generators. SolarRola cuts the cord — silent, clean power that rolls out wherever the coffee goes.',
    date: 'June 2026',
    tag: 'Field Story',
    link: '/blog/solarola-coffee-vendors',
  },
];

function Blog() {
  return (
    <div className="page">
      <Navbar />

      <section className="section blog-header">
        <div className="container--narrow">
          <p className="label fade-up">Latest thinking</p>
          <h1 className="display fade-up fade-up-1" style={{ marginTop: 12 }}>
            From the <em>blog</em>
          </h1>
          <p className="body-lg fade-up fade-up-2" style={{ marginTop: 20 }}>
            Insights, updates, and technology news from the PrintWindAI team.
          </p>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="container">
          <ul className="blog-list">
            {posts.map((p, i) => (
              <li key={i}>
                <a href={p.link} className="blog-card">
                  <div className="blog-card__meta">
                    <span className="pill">{p.tag}</span>
                    <span className="blog-card__date">{p.date}</span>
                  </div>
                  <h2 className="heading-lg" style={{ marginTop: 16 }}>{p.title}</h2>
                  <p className="body-lg" style={{ marginTop: 12 }}>{p.summary}</p>
                  <span className="blog-card__cta">Read article →</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Blog;
