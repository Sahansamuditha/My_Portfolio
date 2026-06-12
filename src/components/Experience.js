import React from 'react';
import './Experience.css';

function Experience() {
  const timelineData = [
    {
      id: 1,
      type: 'education',
      role: 'IT Diploma Student',
      company: 'Institute of Technology University of Moratuwa',
      date: '2022 - PRESENT',
      description: 'I am currently studying an IT Diploma at ITUM, developing skills in software development, system analysis, and practical IT applications.'
    },
    {
      id: 2,
      type: 'education',
      role: 'IT certification course student',
      company: 'The Open University of Sri Lanka',
      date: '2021 - 2022',
      description: 'I have completed an IT certification course at the Open University of Sri Lanka, gaining basic IT knowledge and practical skills.'
    },
    {
      id: 3,
      type: 'education',
      role: 'Cyber Security and Ethical Hacking Student',
      company: 'NextGen Academy',
      date: '2020 - 2021',
      description: 'Completed a Cyber Security and Ethical Hacking certification, gaining basic knowledge in network security, vulnerability testing, and protecting systems from cyber threats.'
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">My Journey</h2>

        <div className="timeline-container">
          {timelineData.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className={`timeline-dot ${item.type}`}>
                {item.type === 'work' ? (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                ) : (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                  </svg>
                )}
              </div>
              <div className="timeline-card glass-panel">
                <span className="timeline-date">{item.date}</span>
                <h3 className="timeline-role">{item.role}</h3>
                <h4 className="timeline-company">{item.company}</h4>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
