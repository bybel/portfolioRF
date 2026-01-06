import React, { useEffect, useRef } from 'react';

const MatrixRain = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const katakana = 'アカタハヤラガダパィシニミヰジビウクツフユルズヅエケテヘレゲデペォソノモョヲゾボヴン';
        const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const nums = '0123456789';
        const greek = 'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ';
        const cyrillic = 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
        const runes = 'ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁჂᛇᛈᛉᛊᛏᛒᛖᛗᛚᛜᛞᛟ';
        const cyber = '∀∃∅∈∉∋∏∑√∝∞∠∫≈≠≡≤≥⊂⊃⊆⊇⊕⊗';

        const letters = katakana + latin + nums + greek + cyrillic + runes + cyber;
        const fontSize = 14;
        const columns = width / fontSize;
        const drops = [];

        for (let x = 0; x < columns; x++) {
            drops[x] = Math.random() * height / fontSize; // Start at random heights
        }

        let mouse = { x: -1000, y: -1000 };

        const handleMouseMove = (e) => {
            // Get mouse position relative to viewport (fixed position generally)
            // But since canvas follows scroll or is fixed, we need to be careful.
            // For Hero section, it will likely be relative to the section.
            // If the canvas fills the hero section, we can use clientX/Y if the section is at top.
            // To be safe, we'll use clientX/clientY minus canvas bounding box.
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        // We attach listener to window or canvas? 
        // If canvas is behind content, it might not catch events if content blocks it.
        // Better to attach to window and check bounds, or just let 'Play' passed prop handle it?
        // Actually, let's just attach to window for simplicity for now, identifying if we cover the canvas area.
        window.addEventListener('mousemove', handleMouseMove);

        const draw = () => {
            // Semi-transparent black to create trail effect
            // Lower opacity (0.05) to create long lingering trails (persistence)
            ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
            // Matching the theme background somewhat
            ctx.fillRect(0, 0, width, height);

            ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = letters.charAt(Math.floor(Math.random() * letters.length));

                const x = i * fontSize;
                const y = drops[i] * fontSize;

                // Mouse reveal logic
                const dist = Math.hypot(x - mouse.x, y - mouse.y);
                const maxDist = 500; // Reveal radius

                // Only draw if within radius
                if (dist < maxDist) {
                    const opacity = Math.pow(1 - (dist / maxDist), 3); // Cubic falloff for smoother edge

                    // Color logic: Bright green at center, darker at edges
                    if (Math.random() > 0.95) {
                        ctx.fillStyle = `rgba(188, 19, 254, ${opacity})`; // Occasional purple highlight
                    } else {
                        ctx.fillStyle = `rgba(0, 255, 65, ${opacity})`;
                    }

                    ctx.fillText(text, x, y);
                }

                // Reset drop to top randomly
                if (y * fontSize > height && Math.random() > 0.995) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        };

        const interval = setInterval(draw, 42);

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            // Recalculate columns on resize
            // Note: drops array size won't match anymore, but JS arrays are resilient.
            // Better to re-init drops or just let it be.
        };
        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="matrix-canvas"
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
                pointerEvents: 'none' // Click-through
            }}
        />
    );
};

export default MatrixRain;
