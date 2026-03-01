import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const BASE = import.meta.env.BASE_URL;

const Home: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [muted, setMuted] = useState(true);

    useEffect(() => {
        videoRef.current?.play().catch(() => {});
    }, []);

    const toggleMute = () => {
        if (!videoRef.current) return;
        videoRef.current.muted = !muted;
        setMuted(!muted);
    };

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div
                    className="hero-background"
                    style={{ backgroundImage: `url(${BASE}assets/projects/hero.jpg)` }}
                ></div>
                <div className="container">
                    <div className="hero-content animate-fade-in">
                        <h1 className="hero-title">
                            Designing Spaces<br />
                            <span className="text-gradient">That Inspire</span>
                        </h1>
                        <p className="hero-description">
                            We create innovative architectural solutions that blend form, function, and sustainability
                            to transform your vision into reality.
                        </p>
                        <div className="hero-actions">
                            <Link to="/projects" className="btn btn-primary btn-large">
                                View Projects
                            </Link>
                            <Link to="/contact" className="btn btn-secondary btn-large">
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Full-Screen Reel Section */}
            <section className="reel-hero">
                <video
                    ref={videoRef}
                    className="reel-hero-video"
                    src={`${BASE}assets/reel.mp4`}
                    poster={`${BASE}assets/projects/wa-10.jpg`}
                    muted
                    loop
                    playsInline
                    preload="auto"
                />
                <div className="reel-hero-overlay">
                    <div className="reel-hero-text">
                        <h2>Interior Design Reel</h2>
                        <p>Crafting exceptional living spaces</p>
                    </div>
                    <button className="mute-btn" onClick={toggleMute} aria-label={muted ? 'Unmute' : 'Mute'}>
                        {muted ? '🔇 Unmute' : '🔊 Mute'}
                    </button>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Why Choose Us</h2>
                        <p>Excellence in every detail, innovation in every design</p>
                    </div>
                    <div className="features-grid grid grid-3">
                        <div className="feature-card glass-card">
                            <div className="feature-icon">✨</div>
                            <h3>Innovative Design</h3>
                            <p>Cutting-edge architectural solutions that push boundaries and set new standards.</p>
                        </div>
                        <div className="feature-card glass-card">
                            <div className="feature-icon">🌍</div>
                            <h3>Sustainable Approach</h3>
                            <p>Eco-friendly designs that minimize environmental impact and maximize efficiency.</p>
                        </div>
                        <div className="feature-card glass-card">
                            <div className="feature-icon">🏆</div>
                            <h3>Award-Winning</h3>
                            <p>Recognized excellence with multiple industry awards and client satisfaction.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content glass-card">
                        <h2>Ready to Start Your Project?</h2>
                        <p>Let's collaborate to bring your architectural vision to life</p>
                        <Link to="/contact" className="btn btn-primary btn-large">
                            Contact Us Today
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
