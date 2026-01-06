import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

// Configure worker using Vite's URL handling to ensure correct bundling
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const CVSection = () => {
    const [numPages, setNumPages] = useState(null);
    const [width, setWidth] = useState(600); // Default start width

    // Dynamic width for responsiveness
    useEffect(() => {
        const handleResize = () => {
            const container = document.querySelector('.cv-container');
            if (container) {
                setWidth(container.clientWidth);
            } else {
                setWidth(window.innerWidth > 900 ? 900 : window.innerWidth - 40);
            }
        };

        // Initial set
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const cvUrl = `${import.meta.env.BASE_URL}cv.pdf`;

    return (
        <section id="cv" className="cv-section container">
            <h2 className="section-title">CURRICULUM VITAE</h2>

            <div className="cv-container animate-slide-up">
                <Document
                    file={cvUrl}
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={<div className="loading-state">Loading CV...</div>}
                    error={<div className="error-state">Failed to load PDF. Please download below.</div>}
                    className="pdf-document"
                >
                    {/* Render Page 1 */}
                    <Page
                        pageNumber={1}
                        width={width}
                        className="pdf-page"
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                    />

                    {/* Render Page 2 (if it exists) */}
                    {numPages >= 2 && (
                        <>
                            <div className="page-separator"></div>
                            <Page
                                pageNumber={2}
                                width={width}
                                className="pdf-page"
                                renderTextLayer={false}
                                renderAnnotationLayer={false}
                            />
                        </>
                    )}
                </Document>
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
                    min-height: 500px;
                    position: relative;
                    /* Invert filter: Makes white PDF background black, black text white */
                    filter: invert(1) hue-rotate(180deg) contrast(0.9);
                }

                .pdf-document {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 20px;
                }

                .pdf-page canvas {
                    border-radius: 8px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    display: block !important;
                    height: auto !important; /* Ensure aspect ratio is maintained */
                }

                .page-separator {
                    width: 100%;
                    height: 2px;
                    background: #555;
                    opacity: 0.5;
                }
                
                .loading-state, .error-state {
                    color: #000;
                    font-family: var(--font-mono);
                    text-align: center;
                    padding: 40px;
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
