import React, { useState, useEffect } from 'react';
import { Shield, ChevronDown } from 'lucide-react';
import MatrixRain from './MatrixRain';
import epflLogo from '../assets/logos/Logo_EPFL_2019.svg';
import ethLogo from '../assets/logos/ETH_Zürich_Logo_black.svg';

const Hero = () => {
  const [text, setText] = useState('');
  // ... (rest of component state)

  // ... (rest of visuals)

  // ...

  const fullText = "CYBERSECURITY ENGINEER";
  const [subText, setSubText] = useState('');
  const fullSubText = "PROTECTING DIGITAL ASSETS // CREATING AUDIO LANDSCAPES";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        // Start subtext typing
        let subIndex = 0;
        const subInterval = setInterval(() => {
          if (subIndex <= fullSubText.length) {
            setSubText(fullSubText.slice(0, subIndex));
            subIndex++;
          } else {
            clearInterval(subInterval);
          }
        }, 30);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section">
      <MatrixRain />

      <div className="container hero-content">
        <div className="badge animate-fade-in">
          <Shield size={16} className="badge-icon" />
          <span>SYSTEM ONLINE</span>
        </div>

        <h1 className="glitch-title" data-text="RAPHAEL FLUCKIGER">
          RAPHAEL FLUCKIGER
        </h1>

        <div className="terminal-text">
          <span className="prompt">{'>'}</span> {text}<span className="cursor-block">_</span>
        </div>

        <p className="sub-text">{subText}</p>

        <div className="cta-group animate-slide-up">
          <a href="#work" className="btn btn-primary">
            VIEW PROJECTS
          </a>
          <a href="#play" className="btn btn-secondary">
            AUDIO LOGS
          </a>
        </div>


      </div>

      <div className="logo-group animate-fade-in" style={{
        position: 'absolute',
        bottom: '40px',
        right: '40px',
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        opacity: 0.7,
        zIndex: 20
      }}>
        <img
          src={epflLogo}
          alt="EPFL Logo"
          style={{
            height: '25px',
            width: 'auto',
            filter: 'grayscale(100%) sepia(1) saturate(5) hue-rotate(80deg) brightness(1.2) drop-shadow(0 0 2px rgba(0, 255, 65, 0.5))',
          }}
        />
        <div style={{ width: '1px', height: '20px', background: 'var(--text-accent)', opacity: 0.3 }}></div>
        <img
          src={ethLogo}
          alt="ETH Logo"
          style={{
            height: '24px',
            width: 'auto',
            filter: 'invert(1) sepia(1) saturate(5) hue-rotate(80deg) brightness(1.2) drop-shadow(0 0 2px rgba(0, 255, 65, 0.5))',
          }}
        />
      </div>

      <a href="#work" className="scroll-indicator animate-fade-in">
        <ChevronDown size={32} />
      </a>

      <style>{`
        .hero-section {
          height: calc(100vh - var(--header-height));
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
          background: radial-gradient(circle at 50% 50%, rgba(5, 5, 5, 1) 0%, #000 100%);
        }

        .hero-content {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          z-index: 10;
          position: relative;
        }

        .badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(0, 255, 65, 0.1);
          border: 1px solid var(--border-accent);
          border-radius: 4px;
          color: var(--text-accent);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          letter-spacing: 1px;
          backdrop-filter: blur(4px);
        }

        .glitch-title {
          font-size: 3.5rem;
          font-weight: 800;
          letter-spacing: -2px;
          position: relative;
          color: var(--text-primary);
          text-shadow: 2px 2px 0px rgba(188, 19, 254, 0.5);
          max-width: 100%;
          padding: 0 20px;
          line-height: 1.1;
        }

        .glitch-title::before,
        .glitch-title::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.8;
        }

        .glitch-title::before {
          left: 2px;
          text-shadow: -1px 0 #00ff41;
          clip: rect(24px, 550px, 90px, 0);
          animation: glitch-anim-2 3s infinite linear alternate-reverse;
        }

        .glitch-title::after {
          left: -2px;
          text-shadow: -1px 0 #bc13fe;
          clip: rect(85px, 550px, 140px, 0);
          animation: glitch-anim 2.5s infinite linear alternate-reverse;
        }

        @keyframes glitch-anim {
          0% { clip: rect(10px, 9999px, 30px, 0); }
          20% { clip: rect(80px, 9999px, 100px, 0); }
          40% { clip: rect(30px, 9999px, 40px, 0); }
          60% { clip: rect(10px, 9999px, 80px, 0); }
          100% { clip: rect(50px, 9999px, 90px, 0); }
        }

        @keyframes glitch-anim-2 {
          0% { clip: rect(60px, 9999px, 70px, 0); }
          20% { clip: rect(10px, 9999px, 20px, 0); }
          40% { clip: rect(50px, 9999px, 60px, 0); }
          60% { clip: rect(20px, 9999px, 70px, 0); }
          100% { clip: rect(90px, 9999px, 100px, 0); }
        }

        .terminal-text {
          font-family: var(--font-mono);
          font-size: 1.5rem;
          color: var(--text-primary);
          text-shadow: 0 0 5px rgba(0,0,0,0.8);
        }

        .prompt {
          color: var(--text-accent);
          margin-right: 10px;
        }

        .cursor-block {
          display: inline-block;
          width: 12px;
          height: 24px;
          background: var(--text-accent);
          vertical-align: middle;
          margin-left: 5px;
          animation: blink 1s step-end infinite;
        }

        .sub-text {
          font-family: var(--font-mono);
          color: var(--text-secondary);
          font-size: 0.9rem;
          min-height: 1.6em;
          text-shadow: 0 0 5px rgba(0,0,0,0.8);
        }

        .cta-group {
          display: flex;
          gap: 20px;
          margin-top: 30px;
        }

        .btn {
          padding: 12px 24px;
          border-radius: 4px;
          font-family: var(--font-mono);
          font-weight: 700;
          text-transform: uppercase;
          transition: all 0.3s ease;
          border: 1px solid transparent;
          backdrop-filter: blur(2px);
        }

        .btn-primary {
          background: var(--text-accent);
          color: var(--bg-primary);
        }
        
        .btn-primary:hover {
          background: transparent;
          border-color: var(--text-accent);
          color: var(--text-accent);
          box-shadow: 0 0 15px rgba(0, 255, 65, 0.5);
        }

        .btn-secondary {
          background: rgba(5, 5, 5, 0.5);
          border-color: var(--text-highlight);
          color: var(--text-highlight);
        }

        .btn-secondary:hover {
          background: var(--text-highlight);
          color: var(--bg-primary);
          box-shadow: 0 0 15px rgba(188, 19, 254, 0.5);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          color: var(--text-secondary);
          animation: float 2s ease-in-out infinite;
          z-index: 10;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }

        @media (max-width: 768px) {
          .glitch-title {
            font-size: 2rem;
          }
          .terminal-text {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
