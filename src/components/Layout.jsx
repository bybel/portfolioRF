import React from 'react';
import { Terminal, Music, Camera } from 'lucide-react';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="navbar">
        <div className="container navbar-content">
          <div className="logo">
            <Terminal size={24} className="logo-icon" />
            <span className="logo-text">RAPHAEL_FLUCKIGER<span className="cursor">_</span></span>
          </div>
          <nav className="nav-links">
            <a href="#work" className="nav-item">WORK</a>
            <a href="#play" className="nav-item">AUDIO</a>
            <a href="#contact" className="nav-item">CONTACT</a>
          </nav>
        </div>
      </header>

      <main className="main-content">
        {children}
      </main>

      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Raphonics. built_secure.</p>
        </div>
      </footer>

      <style>{`
        .layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        
        .navbar {
          height: var(--header-height);
          border-bottom: 1px solid var(--border-color);
          position: sticky;
          top: 0;
          background: rgba(5, 5, 5, 0.8);
          backdrop-filter: blur(10px);
          z-index: 100;
          display: flex;
          align-items: center;
        }

        .navbar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 1.2rem;
          color: var(--text-primary);
        }

        .logo-icon {
          color: var(--text-accent);
        }

        .cursor {
          animation: blink 1s step-end infinite;
          color: var(--text-accent);
        }

        @keyframes blink {
          50% { opacity: 0; }
        }

        .nav-links {
          display: flex;
          gap: 30px;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }

        .nav-item {
          font-family: var(--font-mono);
          font-size: 0.9rem;
          color: var(--text-secondary);
          position: relative;
        }

        .nav-item:hover {
          color: var(--text-primary);
        }

        .nav-item::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--text-accent);
          transition: width 0.3s ease;
        }

        .nav-item:hover::after {
          width: 100%;
        }

        .main-content {
          flex: 1;
        }

        .footer {
          padding: 40px 0;
          border-top: 1px solid var(--border-color);
          text-align: center;
          color: var(--text-secondary);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          margin-top: 60px;
        }
      `}</style>
    </div>
  );
};

export default Layout;
