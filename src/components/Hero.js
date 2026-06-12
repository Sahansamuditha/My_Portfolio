import React, { useState, useEffect } from 'react';
import './Hero.css';

const roles = ['Full-Stack Developer', 'UI/UX Designer', 'Mobile App Developer'];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseDuration = 1500;

  useEffect(() => {
    let timer;
    const activeRole = roles[roleIndex];

    if (!isDeleting) {
      if (currentText.length < activeRole.length) {
        timer = setTimeout(() => {
          setCurrentText(activeRole.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Pause at full word before deleting
        timer = setTimeout(() => setIsDeleting(true), pauseDuration);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(activeRole.slice(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>
      
      <div className="hero-container container">
        <div className="hero-content animate-fade-in">
          <p className="hero-greeting">Hi, my name is</p>
          <h1 className="hero-title">Sahan samuditha</h1>
          <h2 className="hero-subtitle">
            I'm a <span className="typing-text">{currentText}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-description">
           I am an IT undergraduate at Institute of Technology, University of Moratuwa passionate about building modern, interactive, and user-friendly web and mobile applications.
          I enjoy creating clean UI/UX designs and developing responsive digital experiences using technologies like React.js and React Native.

          </p>

          <div className="hero-buttons">
            <button className="gradient-border-btn" onClick={() => handleScrollTo('projects')}>
              View My Work
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <button className="btn-secondary" onClick={() => handleScrollTo('contact')}>
              Let's Connect
            </button>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/Sahansamuditha" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/sahan-samuditha-4a3311360/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
            <img src="https://i.ibb.co/LDTMYrnT/Gemini-Generated-Image-b4ldhub4ldhub4ld.png" alt="Sahan Samuditha" className="hero-avatar" />
      </div>
    </section>
  );
}

export default Hero;
