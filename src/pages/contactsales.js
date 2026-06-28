import '../contactsales.css';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Footer } from './home';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', reason: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyCzCZe8bjEkEbchCeTxuw7zTJ4cbGxfz3TABi-9R6o5ZECfQtLtcCBYdggb2czSEG5/exec';

    try {
      const payload = new FormData();
      Object.entries(formData).forEach(([k, v]) => payload.append(k, v));
      const res = await fetch(scriptURL, { method: 'POST', body: payload });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', reason: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="page">
      <Navbar />

      <section className="section contact-section">
        <div className="container contact-grid">

          {/* Left: copy */}
          <div className="contact-copy">
            <p className="label fade-up">Get in touch</p>
            <h1 className="heading-xl fade-up fade-up-1" style={{ marginTop: 12 }}>
              Let's talk about<br />your next project
            </h1>
            <p className="body-lg fade-up fade-up-2" style={{ marginTop: 20 }}>
              Whether you're a wind farm developer, energy company, or investor — our team
              would love to explore how PrintWindAI can help.
            </p>

            <ul className="contact-details fade-up fade-up-3">
              <li>
                <span className="contact-details__icon">✉</span>
                <a href="mailto:support@printwindai.com">support@printwindai.com</a>
              </li>
              <li>
                <span className="contact-details__icon">◎</span>
                United Kingdom
              </li>
            </ul>
          </div>

          {/* Right: form */}
          <div className="contact-form-card fade-up fade-up-2">
            {status === 'success' ? (
              <div className="contact-success">
                <span className="contact-success__icon">✓</span>
                <h2 className="heading-md" style={{ marginTop: 16 }}>Message sent!</h2>
                <p className="body-md" style={{ marginTop: 8 }}>
                  Thanks for reaching out. We'll get back to you within one business day.
                </p>
                <button
                  className="btn btn--outline"
                  style={{ marginTop: 24 }}
                  onClick={() => setStatus('idle')}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-field">
                  <label className="form-label" htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Your name"
                    disabled={status === 'loading'}
                  />
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="you@company.com"
                    disabled={status === 'loading'}
                  />
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="reason">How can we help?</label>
                  <textarea
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                    className="form-textarea"
                    placeholder="Tell us about your project or questions…"
                    rows={5}
                    disabled={status === 'loading'}
                  />
                </div>
                {status === 'error' && (
                  <p style={{ color: '#c0392b', fontSize: '0.875rem' }}>
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
                <button
                  type="submit"
                  className="btn btn--primary"
                  style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Sending…' : 'Send message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
