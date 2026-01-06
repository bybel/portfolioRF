import React from 'react';
import cvPdf from '../assets/RaphaelFluckigerCV_alt_reduce.pdf';

const CVSection = () => {
    return (
        <section id="cv" className="cv-section container">
            <h2 className="section-title">CURRICULUM VITAE</h2>

            <div className="cv-container animate-slide-up">
                {/* PDF Embed */}
                <iframe
                    src={cvPdf}
                    className="cv-frame"
                    title="Raphael Fluckiger CV"
                />
            </div>

            <div className="cv-actions">
                <a href={cvPdf} download="Raphael_Fluckiger_CV.pdf" className="btn btn-primary">
                    DOWNLOAD PDF
                </a>
            </div>

            <style>{`
                .cv-section {
                    padding: 80px 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 40px;
                }

                .section-title {
                    font-size: 2.5rem;
                    color: var(--text-primary);
                    margin-bottom: 20px;
                    text-align: center;
                    text-shadow: 0 0 10px rgba(0, 255, 65, 0.3);
                }

                .cv-container {
                    width: 100%;
                    max-width: 900px;
                    height: 800px; /* Adjust height as needed */
                    border: 1px solid var(--text-accent);
                    border-radius: 8px;
                    overflow: hidden;
                    position: relative;
                    background: #fff; /* White bg for the PDF frame context */
                    filter: invert(1) hue-rotate(180deg); /* Invert colors to make white PDF dark */
                }

                .cv-frame {
                    width: 100%;
                    height: 100%;
                    border: none;
                }

                .cv-actions {
                    margin-top: 20px;
                }

                @media (max-width: 768px) {
                    .cv-container {
                        height: 500px;
                    }
                    .section-title {
                        font-size: 2rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default CVSection;
