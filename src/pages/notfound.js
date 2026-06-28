import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Footer } from './home';

function NotFound() {
  return (
    <div className="page">
      <Navbar />

      <section className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container--narrow" style={{ textAlign: 'center' }}>
          <p className="label fade-up">Error 404</p>
          <h1 className="display fade-up fade-up-1" style={{ marginTop: 12 }}>
            Page <em>not found</em>
          </h1>
          <p className="body-lg fade-up fade-up-2" style={{ marginTop: 20 }}>
            Sorry, the page you're looking for doesn't exist or has moved.
          </p>
          <Link to="/" className="btn btn--primary" style={{ marginTop: 36 }}>
            Back to home →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default NotFound;
