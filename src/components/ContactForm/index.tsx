import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Simulate form submission
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });

            setTimeout(() => {
                setStatus('idle');
            }, 3000);
        }, 500);
    };

    return (
        <form className="contact-form glass-card" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    required
                ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-large">
                Send Message
            </button>

            {status === 'success' && (
                <div className="form-message success">
                    Thank you! Your message has been sent successfully.
                </div>
            )}
        </form>
    );
};

export default ContactForm;
