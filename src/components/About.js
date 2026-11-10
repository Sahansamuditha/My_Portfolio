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
      description: 'Analyzing complex challenges and translating them into elegant, clean, and scalable solutions.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      )
    },
    {
      title: 'UI/UX Enthusiast',
      description: 'Strong focus on aesthetics, smooth micro-interactions, responsive structures, and design-to-code alignment.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      )
    },
    {
      title: 'Performance Focused',
      description: 'Building lightweight components, minimizing bundle size, and ensuring lightning-fast load speeds.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      )
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
