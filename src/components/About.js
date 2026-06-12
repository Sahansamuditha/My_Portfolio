import React from 'react';
import './About.css';

function About() {
  const stats = [
    { value: '5+', label: 'Projects Completed' },
    { value: '100%', label: 'Client Satisfaction' },
  ];

  const values = [
    {
      title: 'Problem Solver',
      description: 'Analyzing complex challenges and translating them into elegant, clean, and scalable solutions.'
    },
    {
      title: 'UI/UX Enthusiast',
      description: 'Strong focus on aesthetics, smooth micro-interactions, responsive structures, and design-to-code alignment.'
    },
    {
      title: 'Performance Focused',
      description: 'Building lightweight components, minimizing bundle size, and ensuring lightning-fast load speeds.'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          <div className="about-bio-container">
            <h3 className="about-subtitle">Who I Am</h3>
            <p className="about-text">
              I am a dedicated software developer from Sri Lanka, focused on building modern, responsive web and mobile applications. My interest in technology began with a curiosity about how software systems operate, which gradually developed into a strong passion for creating practical, user-focused digital solutions.
            </p>
            <p className="about-text">
              I have experience working with both frontend development and backend integration, allowing me to connect clean, intuitive user interfaces with reliable and efficient system architecture. I enjoy exploring modern frameworks, improving UI/UX quality through thoughtful design and micro-interactions, and continuously expanding my technical skills.
            </p>

             <div className="about-stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card glass-panel">
                  <span className="stat-value gradient-text">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-values-container">
            <h3 className="about-subtitle">Core Pillars</h3>
            <div className="values-list">
              {values.map((val, index) => (
                <div key={index} className="value-item glass-panel">
                  <div className="value-icon-wrapper gradient-bg">
                    {val.icon}
                  </div>
                  <div className="value-details">
                    <h4 className="value-title">{val.title}</h4>
                    <p className="value-description">{val.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
