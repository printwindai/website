import '../contactsales.css';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', reason: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting form data:", formData);

    const scriptURL = "https://script.google.com/macros/s/AKfycbyCzCZe8bjEkEbchCeTxuw7zTJ4cbGxfz3TABi-9R6o5ZECfQtLtcCBYdggb2czSEG5/exec";

    try {
      const formPayload = new FormData();
      formPayload.append("name", formData.name);
      formPayload.append("email", formData.email);
      formPayload.append("reason", formData.reason);

      const response = await fetch(scriptURL, {
        method: "POST",
        body: formPayload,
      });

      console.log("Response status:", response.status);
      const responseText = await response.text();
      console.log("Response text:", responseText);

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', reason: '' });
        alert("Form submitted successfully!");
      } else {
        alert("Submission failed. Status: " + response.status);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form: " + error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <h1 className="contact-title">Contact Sales</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <label className="form-label">
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required className="form-input" />
          </label>
          <label className="form-label">
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="form-input" />
          </label>
          <label className="form-label">
            Reason for Contact:
            <textarea name="reason" value={formData.reason} onChange={handleChange} required className="form-textarea" />
          </label>
          <button type="submit" className="form-button">Submit</button>
        </form>
        {submitted && <p className="success-message">Thank you for your submission!</p>}
      </div>
    </div>
  );
}

export default Contact;
