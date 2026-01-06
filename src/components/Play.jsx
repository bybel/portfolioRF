import React from 'react';
// import concertImg from '../assets/images/81477BB6-5728-40D7-AEBF-B22EC4ADFD62_1_105_c.jpeg';
// import concertImg2 from '../assets/images/D3F011DF-6645-4382-BC0C-BB909D9631DC_1_105_c.jpeg';
// import concertImg3 from '../assets/images/D8E3C35D-4248-44E2-8C78-BAFFC2DB4D83_1_105_c.jpeg';
const SoundCloudEmbed = ({ src, title }) => (
  <div style={{ marginBottom: '20px', borderRadius: '8px', overflow: 'hidden' }}>
    <iframe
      width="100%"
      height="166"
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      src={src}
      style={{ filter: 'opacity(0.8) invert(90%) hue-rotate(180deg)' }}
    ></iframe>
  </div>
);

const Play = () => {
  return (
    <section id="play" className="play-section">
      <div className="container">
        <h2 className="section-title">
          <span className="hash">#</span> AUDIO_LOGS
        </h2>

        <div className="content-grid">
          <div className="music-column">
            <h3 className="column-title">TRANSMISSIONS</h3>
            <div className="track-list">
              <SoundCloudEmbed
                title="slipp'n"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1146669835&color=%235c547c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              />
              <SoundCloudEmbed
                title="Monique"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A804452293&color=%235f682e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              />
              <SoundCloudEmbed
                title="X2"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1083512545&color=%23cc8c5c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              />
              <SoundCloudEmbed
                title="Dududum"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1591722295&color=%23347447&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              />
            </div>
          </div>

          {/* <div className="gallery-column">
            <h3 className="column-title">CAPTURES</h3>
            <div className="gallery-grid">
              <div className="gallery-item item-1" style={{ backgroundImage: `url(${concertImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div className="gallery-item item-2" style={{ backgroundImage: `url(${concertImg2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div className="gallery-item item-3" style={{ backgroundImage: `url(${concertImg3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div className="gallery-item item-4"></div>
            </div>
          </div> */}
        </div>
      </div>

      <style>{`
        .play-section {
          padding: 100px 0;
          background: var(--bg-primary);
        }

        .section-title {
          font-size: 2rem;
          margin-bottom: 50px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .hash {
          color: var(--text-highlight);
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr; /* 1fr 1fr; */
          gap: 60px;
        }

        .column-title {
          font-family: var(--font-mono);
          color: var(--text-secondary);
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 10px;
          margin-bottom: 30px;
          font-size: 1rem;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 200px 200px;
          gap: 15px;
        }

        .gallery-item {
          background: #222;
          border-radius: 4px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }
        
        /* Placeholders - in real app, these would be background images */
        .item-1 { grid-column: 1 / 3; }
        .item-2 { background: linear-gradient(to bottom, #222, #111); }
        .item-3 { background: linear-gradient(to top, #1a1a1a, #000); }
        
        .gallery-item:hover {
          filter: brightness(1.2);
          transform: scale(1.02);
        }

        .gallery-item::after {
          content: 'VIEW_IMG';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-family: var(--font-mono);
          opacity: 0;
          transition: opacity 0.3s;
          background: rgba(0,0,0,0.7);
          padding: 5px 10px;
        }

        .gallery-item:hover::after {
          opacity: 1;
        }

        @media (max-width: 900px) {
          .content-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Play;
