import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Work from './components/Work';
import Play from './components/Play';



function App() {
    return (
        <Layout>
            <Hero />
            <Work />
            <Play />
            <div id="contact" className="container" style={{
                padding: '80px 20px',
                borderTop: '1px solid var(--border-color)',
                textAlign: 'center'
            }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>READY TO COLLABORATE?</h2>
                <a href="mailto:rfluecki@proton.me" style={{
                    fontSize: '1.5rem',
                    fontFamily: 'var(--font-mono)',
                    textDecoration: 'underline'
                }}>
                    rfluecki@proton.me
                </a>
            </div>
        </Layout>
    );
}

export default App;
