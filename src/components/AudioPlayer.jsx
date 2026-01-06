import React, { useState } from 'react';
import { Play, Pause, Disc } from 'lucide-react';

const AudioPlayer = ({ title, duration }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="audio-player">
      <div className="track-info">
        <div className={`disc-icon ${isPlaying ? 'spinning' : ''}`}>
          <Disc size={24} />
        </div>
        <div className="meta">
          <span className="track-title">{title}</span>
          <span className="track-duration">{duration}</span>
        </div>
      </div>

      <div className="controls">
        <button
          className="play-btn"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>

        <div className="waveform">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`bar ${isPlaying ? 'animating' : ''}`}
              style={{
                animationDelay: `${i * 0.05}s`,
                height: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        .audio-player {
          background: rgba(188, 19, 254, 0.05);
          border: 1px solid var(--text-highlight);
          padding: 16px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .track-info {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .disc-icon {
          color: var(--text-highlight);
        }

        .spinning {
          animation: spin 3s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .meta {
          display: flex;
          flex-direction: column;
        }

        .track-title {
          color: var(--text-primary);
          font-weight: 700;
          font-size: 0.9rem;
        }

        .track-duration {
          color: var(--text-secondary);
          font-size: 0.8rem;
          font-family: var(--font-mono);
        }

        .controls {
          display: flex;
          align-items: center;
          gap: 20px;
          flex: 1;
          justify-content: flex-end;
          max-width: 300px;
        }

        .play-btn {
          background: var(--text-highlight);
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .play-btn:hover {
          transform: scale(1.1);
        }

        .waveform {
          display: flex;
          align-items: center;
          gap: 2px;
          height: 30px;
          flex: 1;
        }

        .bar {
          flex: 1;
          background: var(--text-highlight);
          opacity: 0.3;
          border-radius: 2px;
          transition: height 0.2s;
        }

        .animating {
          animation: dance 0.5s ease-in-out infinite alternate;
          opacity: 0.8;
        }

        @keyframes dance {
          0% { height: 20%; }
          100% { height: 100%; }
        }
      `}</style>
    </div>
  );
};

export default AudioPlayer;
