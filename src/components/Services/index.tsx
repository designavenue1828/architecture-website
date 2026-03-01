import React from 'react';
import './Services.css';

interface Service {
    id: number;
    title: string;
    description: string;
    icon: string;
}

const services: Service[] = [
    {
        id: 1,
        title: 'Architectural Design',
        description: 'Comprehensive design services from concept to completion, tailored to your vision and needs.',
        icon: '🏛️'
    },
    {
        id: 2,
        title: 'Interior Design',
        description: 'Creating beautiful, functional interior spaces that reflect your style and enhance daily living.',
        icon: '🎨'
    },
    {
        id: 3,
        title: 'Urban Planning',
        description: 'Strategic planning for sustainable communities and efficient use of urban spaces.',
        icon: '🏙️'
    },
    {
        id: 4,
        title: 'Sustainable Design',
        description: 'Eco-friendly solutions that minimize environmental impact while maximizing efficiency.',
        icon: '🌱'
    },
    {
        id: 5,
        title: 'Renovation & Restoration',
        description: 'Breathing new life into existing structures while preserving their character and history.',
        icon: '🔨'
    },
    {
        id: 6,
        title: 'Project Management',
        description: 'End-to-end project coordination ensuring timely delivery and quality execution.',
        icon: '📋'
    }
];

const Services: React.FC = () => {
    return (
        <div className="services-grid grid grid-3">
            {services.map((service) => (
                <div key={service.id} className="service-card glass-card">
                    <div className="service-icon">{service.icon}</div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Services;
