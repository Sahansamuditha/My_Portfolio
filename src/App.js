import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      
      {/* Footer */}
      <footer className="footer">
        <div className="footer-container container">
          <div className="footer-logo">
            Sahan Samuditha<span>.</span>
          </div>
          <p className="footer-text">
            &copy; {new Date().getFullYear()} Sahan Samuditha. All rights reserved. Crafted with React &amp; Vanilla CSS.
          </p>
          <div className="footer-links">
            <a href="#home">Back to Top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
