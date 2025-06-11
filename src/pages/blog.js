// src/pages/Blog.js
import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';
import '../blog.css';

function Blog() {
  const blogPosts = [
    {
      title: 'Revolutionising Wind Farm Building',
      summary: 'Learn how PrintWindAI is using robotics and AI to transform traditional wind tower construction.',
      link: '/blog/revolutionising-wind-farm-inspections'
    }
  ];

  return (
    <div className="blog-page">
      <Navbar />
      <div className="blog-header">
        <h1>PrintWindAI Blog</h1>
        <p>Insights, updates, and technology news from our team.</p>
      </div>
      <div className="blog-list">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            <h2>{post.title}</h2>
            <p>{post.summary}</p>
            <a href={post.link} className="read-more">Read More →</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
