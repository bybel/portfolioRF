import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "OFDM Ranging Security Analysis",
    description: "Investigated IEEE 802.11az secure ranging susceptibility to ED/LC attacks. Modeled transmission and attacker strategies to analyze trade-offs between success rate and complexity. This is used to steal cars, but don't worry, I'm not a thief...",
    tech: ["Python", "MATLAB", "Wireless Security", "Signal Processing"],
    github: null,
    demo: null
  },
  {
    title: "LibXML Fuzzing Campaign",
    description: "Conducted security testing on libXML using LibFuzzer and AFL. Improved code coverage from 8% to 34% and successfully reproduced a CVE.",
    tech: ["C/C++", "AFL", "LibFuzzer", "Vuln Research"],
    github: "https://github.com/bybel/libxml2",
    demo: null
  },
  {
    title: "Location Privacy Preserving Service",
    description: "A Python-based location privacy preserving service that uses differential privacy to protect user location data from fingerprinting. Would you be willing to give your home and work locations for a couple restaurant recommendations?",
    tech: ["Python", "Differential Privacy", "Fingerprinting"],
    github: "https://github.com/bybel/CS-523-projects/tree/master/secretstroll",
    demo: null
  },
  {
    title: "Secure MPC Voting System",
    description: "Designed a secure voting system for multi-party budget allocation using garbled circuits. Enabled joint computation of voting results without revealing individual contributions. The use case was for the UN but we didn't quite have the right contacts.",
    tech: ["Cryptography", "MPC", "Garbled Circuits", "Python"],
    github: "https://github.com/bybel/CS-523-projects/tree/master/smcompiler",
    demo: null
  },
  {
    title: "Quadcopter Flight Controller Design and Implementation",
    description: "Implemented the flight controller's stabilization logic using PID control. The electronics were also designed in-house. BZZZZZ :)) ",
    tech: ["C/C++", "Arduino", "PID Control", "Tx/Rx"],
    github: "https://github.com/bybel/R2-Quadcopter",
    demo: null
  }
];

const Work = () => {
  return (
    <section id="work" className="work-section">
      <div className="container">
        <h2 className="section-title">
          <span className="hash">#</span> SELECTED_PROJECTS
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      <style>{`
        .work-section {
          padding: 100px 0;
          background: var(--bg-secondary);
        }

        .section-title {
          font-size: 2rem;
          margin-bottom: 50px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .hash {
          color: var(--text-accent);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Work;
