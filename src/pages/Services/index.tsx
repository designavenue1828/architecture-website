import React from 'react';
import Services from '../../components/Services';
import './Services.css';

const ServicesPage: React.FC = () => {
    return (
        <div className="services-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Our Services</h1>
                    <p className="page-description">
                        Comprehensive architectural solutions tailored to your unique needs and vision.
                    </p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <Services />
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="process-section glass-card">
                        <h2 className="text-center mb-4">Our Process</h2>
                        <div className="process-steps grid grid-4">
                            <div className="process-step">
                                <div className="step-number">01</div>
                                <h3>Consultation</h3>
                                <p>Understanding your vision and requirements</p>
                            </div>
                            <div className="process-step">
                                <div className="step-number">02</div>
                                <h3>Design</h3>
                                <p>Creating innovative architectural solutions</p>
                            </div>
                            <div className="process-step">
                                <div className="step-number">03</div>
                                <h3>Development</h3>
                                <p>Detailed planning and documentation</p>
                            </div>
                            <div className="process-step">
                                <div className="step-number">04</div>
                                <h3>Execution</h3>
                                <p>Bringing your project to life</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
