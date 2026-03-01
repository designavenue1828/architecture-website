import React from 'react';
import ContactForm from '../../components/ContactForm';
import './Contact.css';

const Contact: React.FC = () => {
    return (
        <div className="contact-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Contact Us</h1>
                    <p className="page-description">
                        Let's discuss your project and bring your architectural vision to life.
                    </p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="contact-content grid grid-2">
                        <div className="contact-info">
                            <h2>Get in Touch</h2>
                            <p>
                                We'd love to hear about your project. Reach out to us and let's create something amazing together.
                            </p>

                            <div className="contact-details">
                                <div className="contact-detail">
                                    <h3>📧 Email</h3>
                                    <p>info@architecturalfirm.com</p>
                                </div>
                                <div className="contact-detail">
                                    <h3>📱 Phone</h3>
                                    <p>+1 (555) 123-4567</p>
                                </div>
                                <div className="contact-detail">
                                    <h3>📍 Address</h3>
                                    <p>123 Design Street<br />City, State 12345</p>
                                </div>
                                <div className="contact-detail">
                                    <h3>🕐 Hours</h3>
                                    <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-wrapper">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
