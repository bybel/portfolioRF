import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card animate-slide-up">
            <div className="card-header">
                <div className="folder-icon">
                    <Code size={20} />
                </div>
                <div className="links">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-link">
                            <Github size={20} />
                        </a>
                    )}
                    {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="icon-link">
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>

            <div className="tech-stack">
                {project.tech.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                ))}
            </div>

            <style>{`
        .project-card {
          background: var(--bg-card);
          padding: 24px;
          border-radius: 8px;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .project-card:hover {
          transform: translateY(-5px);
          border-color: var(--text-accent);
          box-shadow: 0 10px 30px -10px rgba(0, 255, 65, 0.2);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .folder-icon {
          color: var(--text-accent);
        }

        .links {
          display: flex;
          gap: 15px;
        }

        .icon-link {
          color: var(--text-secondary);
        }

        .icon-link:hover {
          color: var(--text-accent);
        }

        .project-title {
          font-size: 1.5rem;
          margin-bottom: 10px;
          color: var(--text-primary);
        }

        .project-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tech-badge {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-accent);
          background: rgba(0, 255, 65, 0.05);
          padding: 4px 8px;
          border-radius: 4px;
        }
      `}</style>
        </div>
    );
};

export default ProjectCard;
