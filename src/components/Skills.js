import React, { useState } from 'react';
import './Skills.css';

function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools & Design' }
  ];

  const skillsData = {
    frontend: [
      { name: 'React.js', percentage: 90, color: 'var(--accent-primary)' },
      { name: 'JavaScript', percentage: 95, color: 'var(--accent-primary)' },
      { name: 'HTML5 & CSS3', percentage: 95, color: 'var(--accent-primary)' },
      { name: 'Redux / Context API', percentage: 80, color: 'var(--accent-primary)' },
      { name: 'CSS', percentage: 85, color: 'var(--accent-primary)' },
      { name: 'React Native', percentage: 75, color: 'var(--accent-primary)' }
    ],
    backend: [
      { name: 'Node.js & Express.js', percentage: 85, color: 'var(--accent-secondary)' },
      { name: 'REST APIs', percentage: 70, color: 'var(--accent-secondary)' },
      { name: 'MongoDB', percentage: 50, color: 'var(--accent-secondary)' },
      { name: 'MySQL', percentage: 90, color: 'var(--accent-secondary)' },
      { name: 'Firebase', percentage: 55, color: 'var(--accent-secondary)' },
      { name: 'Python', percentage: 80, color: 'var(--accent-secondary)' }
    ],
    tools: [
      { name: 'Git & GitHub', percentage: 90, color: 'var(--accent-primary)' },
      { name: 'Docker', percentage: 65, color: 'var(--accent-secondary)' },
      { name: 'Figma (UI/UX)', percentage: 90, color: 'var(--accent-primary)' },
      { name: 'Android Studio', percentage: 75, color: 'var(--accent-secondary)' },
      { name: 'Agile/Jira', percentage: 45, color: 'var(--accent-primary)' },
      { name: 'CI/CD Pipelines', percentage: 60, color: 'var(--accent-secondary)' }
    ]
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>

        <div className="skills-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`skills-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="skills-grid glass-panel">
          {skillsData[activeCategory].map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.percentage}%</span>
              </div>
              <div className="skill-bar-bg">
                <div 
                  className="skill-bar-fill" 
                  style={{ 
                    width: `${skill.percentage}%`,
                    background: `linear-gradient(90deg, ${skill.color}, var(--accent-secondary))`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
