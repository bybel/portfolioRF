import React from 'react';
import cvPage1 from '../assets/output-1.jpg';
import cvPage2 from '../assets/output-2.jpg';

const CVSection = () => {
    /* Path for the PDF download */
    const cvPdfUrl = `${import.meta.env.BASE_URL}cv.pdf`;

    return (
        <section id="cv" className="cv-section container">
            <h2 className="section-title">CURRICULUM VITAE</h2>

            <div className="cv-container animate-slide-up">
                <img
                    src={cvPage1}
                    alt="Raphael Fluckiger CV Page 1"
                    className="cv-image"
                />
                <div className="cv-separator"></div>
                <img
                    src={cvPage2}
                    alt="Raphael Fluckiger CV Page 2"
                    className="cv-image"
                />
            </div>

            <div className="cv-actions">
                <a href={cvPdfUrl} download="Raphael_Fluckiger_CV.pdf" className="btn btn-primary">
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
                    position: relative;
                    /* Invert filter: Makes white background black, black text white */
                    filter: invert(1) hue-rotate(180deg) contrast(0.9);
                    border: 1px solid var(--text-accent);
                    border-radius: 8px;
                    overflow: hidden;
                    background: #fff;
                    display: flex;
                    flex-direction: column;
                }

                .cv-image {
                    width: 100%;
                    height: auto;
                    display: block;
                }

                .cv-separator {
                    height: 4px;
                    background: #ccc;
                    width: 100%;
                }

                .cv-actions {
                    margin-top: 20px;
                }

                @media (max-width: 768px) {
                    .section-title {
                        font-size: 2rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default CVSection;
