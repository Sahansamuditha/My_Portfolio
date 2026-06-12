import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'design', label: 'UI/UX Design' }
  ];

  const projectsData = [
    {
      id: 1,
      title: 'Task-Management-System',
      category: 'all',
      description: 'A Task Management System is a software application used to create, organize, assign, and track tasks efficiently. It helps users manage work, set priorities, monitor progress, and complete tasks on time. The system improves productivity, teamwork, and workflow management by reducing delays and keeping all tasks organized.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Php'],
      github: 'https://github.com/Sahansamuditha/Task-Management-System.git',
      previewGradient: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
      previewUi: (
        <div className="project-preview-mockup">
          <div className="mockup-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="mockup-body code">
            <span className="line-num">1</span> <span className="keyword">const</span> flow = <span className="function">initDevFlow</span>(); <br />
            <span className="line-num">2</span> <span className="comment">{"// Real-time pairing active"}</span> <br />
            <span className="line-num">3</span> flow.<span className="function">connectUser</span>(<span className="string">'Sahan'</span>);
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: 'Election_Project',
      category: 'All',
      description: 'Election_Project is a simple web-based system for managing candidates, voters, and basic election data. It helps organize information, display results, and understand how digital election workflows operate using PHP, MySQL, HTML, and CSS.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Php'],
      github: 'https://github.com/Sahansamuditha/Election_Project.git',
      previewGradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
   
    },
    {
      id: 3,
      title: 'ERP-admin',
      category: 'All',
      tags: ['React Native', 'Redux', 'Expo', 'Google Maps'],
      github: 'https://github.com/fathima-shahfa/ERP-admin.git',
      previewGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      id: 4,
      title: ' Serva project',
      category: 'All',
      description: 'This project develops a centralized Maintenance Monitoring and Management Platform for the Premises Management Unit, ITUM, to replace informal reporting about maintenance requirements. It provides a digital system to log, report, track and manage maintenance tasks efficiently',
      tags: ['React', 'React Native', 'Node.js', 'MySql'],
      github: 'https://github.com/Sahansamuditha/Serva-project.git',
      previewGradient: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
    }

  ];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="project-filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-panel">
              <div 
                className="project-image-preview" 
                style={{ background: project.previewGradient }}
              >
                <div className="preview-overlay">
                  {project.previewUi}
                </div>
              </div>

              <div className="project-info">
                <span className="project-category">{project.category.toUpperCase()}</span>
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a href={project.github} target="_blank" rel="noreferrer" className="action-link" aria-label="GitHub Repository">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
