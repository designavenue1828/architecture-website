import React from 'react';
import './About.css';

const About: React.FC = () => {
    return (
        <div className="about-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">About Us</h1>
                    <p className="page-description">
                        Passionate architects dedicated to creating spaces that inspire and endure.
                    </p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="about-content grid grid-2">
                        <div className="about-text">
                            <h2>Our Story</h2>
                            <p>
                                Founded with a vision to revolutionize architectural design, our firm has been at the forefront
                                of innovative and sustainable building solutions for over two decades.
                            </p>
                            <p>
                                We believe that great architecture is more than just aesthetics—it's about creating spaces that
                                enhance lives, respect the environment, and stand the test of time.
                            </p>
                        </div>
                        <div className="about-image gradient-primary"></div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="text-center mb-4">Our Values</h2>
                    <div className="values-grid grid grid-3">
                        <div className="value-card glass-card">
                            <h3>Innovation</h3>
                            <p>Pushing boundaries with cutting-edge design and technology</p>
                        </div>
                        <div className="value-card glass-card">
                            <h3>Sustainability</h3>
                            <p>Committed to eco-friendly practices and green building solutions</p>
                        </div>
                        <div className="value-card glass-card">
                            <h3>Excellence</h3>
                            <p>Delivering exceptional quality in every project we undertake</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
