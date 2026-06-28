import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Footer } from './home';

function BlogCoffee() {
  return (
    <div className="page">
      <Navbar />

      <article className="section blog-article">
        <div className="container--narrow">

          {/* ── Article header ── */}
          <div className="blog-article__head fade-up">
            <Link to="/blog" className="blog-article__back">← Back to blog</Link>
            <div className="blog-card__meta" style={{ marginTop: 20 }}>
              <span className="pill">Field Story</span>
              <span className="blog-card__date">June 2026</span>
            </div>
            <h1 className="display fade-up fade-up-1" style={{ marginTop: 20 }}>
              How SolarRola changes the game for portable <em>coffee vendors</em>
            </h1>
            <p className="body-lg fade-up fade-up-2" style={{ marginTop: 20, color: 'var(--slate-500)' }}>
              Mobile baristas have always been tethered to noisy, fume-belching generators.
              SolarRola cuts the cord — silent, clean power that rolls out wherever the coffee goes.
            </p>
          </div>

          {/* ── Lead image ── */}
          <div className="blog-article__lead-img fade-up fade-up-3">
            <img src="/images/solarrola-grass.png" alt="SolarRola powering a mobile coffee setup" />
          </div>

          {/* ── Article body ──
               Replace the placeholder paragraphs below with your own
               writing. Keep the className="blog-article__body" wrapper
               and use <h2>, <p>, <blockquote>, etc. inside it. */}
          <div className="blog-article__body">
            <p>
              Write your article here. This section is styled to match the rest of the
              site, so you can simply replace this placeholder text with your own copy.
            </p>

            <h2>The problem with generators</h2>
            <p>
              Add your paragraphs here. You can use as many paragraphs and headings as
              you like — they will inherit the site's typography automatically.
            </p>

            <h2>Rolling out clean power</h2>
            <p>
              Continue the story here. Drop in additional images by copying this snippet
              and pointing the <code>src</code> at any file in <code>/images/</code>:
            </p>

            <blockquote>
              Add a pull-quote here to break up the article — for example a line from a
              vendor about how much quieter their pitch is now.
            </blockquote>

            <h2>What it means for the trade</h2>
            <p>
              Wrap up the article here. When you are happy with it, save the file and the
              page will update automatically in development.
            </p>
          </div>

          {/* ── Footer CTA ── */}
          <div className="blog-article__cta">
            <h2 className="heading-lg">Interested in SolarRola for your business?</h2>
            <p className="body-lg" style={{ marginTop: 12 }}>
              Talk to our team about the right model for the way you work.
            </p>
            <Link to="/contact" className="btn btn--primary" style={{ marginTop: 24 }}>
              Contact sales →
            </Link>
          </div>

        </div>
      </article>

      <Footer />
    </div>
  );
}

export default BlogCoffee;
