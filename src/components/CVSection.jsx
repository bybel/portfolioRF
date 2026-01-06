import React from 'react';

const CVSection = () => {
    // Construct path ensuring correct base for GitHub Pages
    const cvUrl = `${import.meta.env.BASE_URL}cv.pdf`;

    return (
        <section id="cv" className="cv-section container">
            <h2 className="section-title">CURRICULUM VITAE</h2>

            <div className="cv-container animate-slide-up">
                {/* Object Embed for better compatibility */}
                <object
                    data={cvUrl}
                    type="application/pdf"
                    className="cv-frame"
                    aria-label="Raphael Fluckiger CV"
                >
                    <div className="pdf-fallback">
                        <p>Your browser does not support embedding PDFs.</p>
                        <a href={cvUrl} download className="btn btn-primary">Download PDF</a>
                    </div>
                </object>
            </div>

            <div className="cv-actions">
                <a href={cvUrl} download="Raphael_Fluckiger_CV.pdf" className="btn btn-primary">
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
                
                .pdf-fallback {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    color: #000;
                    gap: 20px;
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
