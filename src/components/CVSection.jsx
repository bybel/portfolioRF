import React from 'react';
import cvImage from '../assets/RaphaelFluckigerCV_alt_reduce_img.jpg';

const CVSection = () => {
    /* Path for the PDF download */
    const cvPdfUrl = `${import.meta.env.BASE_URL}cv.pdf`;

    return (
        <section id="cv" className="cv-section container">
            <h2 className="section-title">CURRICULUM VITAE</h2>

            <div className="cv-container animate-slide-up">
                <img
                    src={cvImage}
                    alt="Raphael Fluckiger CV"
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
                }

                .cv-image {
                    width: 100%;
                    height: auto;
                    display: block;
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
