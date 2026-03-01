import React, { useState } from 'react';
import './ProjectGallery.css';

interface Project {
    id: number;
    title: string;
    category: string;
    year: string;
    image: string;
}

const BASE = import.meta.env.BASE_URL;

const projects: Project[] = [
    // Exteriors
    { id: 1,  title: 'Luxury Residence',       category: 'Exterior',  year: '2024', image: `${BASE}assets/projects/project-1.jpg` },
    { id: 2,  title: 'Modern Villa',            category: 'Exterior',  year: '2023', image: `${BASE}assets/projects/project-2.jpg` },
    { id: 3,  title: 'Corporate Complex',       category: 'Exterior',  year: '2023', image: `${BASE}assets/projects/project-3.jpg` },
    // Living Spaces
    { id: 4,  title: 'Drawing Room',            category: 'Interior',  year: '2025', image: `${BASE}assets/projects/project-4.jpg` },
    { id: 5,  title: 'Luxury Living Lounge',    category: 'Interior',  year: '2025', image: `${BASE}assets/projects/wa-02.jpg` },
    { id: 6,  title: 'Living Room with Staircase', category: 'Interior', year: '2025', image: `${BASE}assets/projects/wa-10.jpg` },
    { id: 7,  title: 'Living Area & Lift Lobby', category: 'Interior', year: '2025', image: `${BASE}assets/projects/wa-03.jpg` },
    { id: 8,  title: 'Sitting Room',            category: 'Interior',  year: '2025', image: `${BASE}assets/projects/wa-04.jpg` },
    { id: 9,  title: 'Living Room with Fireplace', category: 'Interior', year: '2025', image: `${BASE}assets/projects/wa-09.jpg` },
    { id: 10, title: 'Aquarium Staircase Wall', category: 'Interior',  year: '2025', image: `${BASE}assets/projects/wa-13.jpg` },
    // Bedrooms
    { id: 11, title: 'Master Bedroom Suite',    category: 'Bedroom',   year: '2024', image: `${BASE}assets/projects/project-5.jpg` },
    { id: 12, title: 'Classic Bedroom',         category: 'Bedroom',   year: '2025', image: `${BASE}assets/projects/wa-01.jpg` },
    { id: 13, title: 'Blue Arch Bedroom',       category: 'Bedroom',   year: '2025', image: `${BASE}assets/projects/wa-06.jpg` },
    { id: 14, title: 'Zen Bamboo Bedroom',      category: 'Bedroom',   year: '2025', image: `${BASE}assets/projects/wa-08.jpg` },
    { id: 15, title: 'Bedroom Suite',           category: 'Bedroom',   year: '2024', image: `${BASE}assets/projects/project-6.jpg` },
    { id: 16, title: 'Contemporary Bedroom',    category: 'Bedroom',   year: '2025', image: `${BASE}assets/projects/wa-14.jpg` },
    // Signature Details
    { id: 17, title: 'Curved Staircase',        category: 'Detail',    year: '2025', image: `${BASE}assets/projects/wa-12.jpg` },
    { id: 18, title: 'Modern Kitchen',          category: 'Kitchen',   year: '2025', image: `${BASE}assets/projects/wa-11.jpg` },
];

const CATEGORIES = ['All', 'Exterior', 'Interior', 'Bedroom', 'Kitchen', 'Detail'];

const ProjectGallery: React.FC = () => {
    const [active, setActive] = useState('All');
    const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

    return (
        <div className="project-gallery-wrapper">
            <div className="gallery-filters">
                {CATEGORIES.map(cat => (
                    <button
                        key={cat}
                        className={`filter-btn ${active === cat ? 'active' : ''}`}
                        onClick={() => setActive(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            <div className="project-gallery grid grid-3">
                {filtered.map((project) => (
                    <div key={project.id} className="project-card glass-card">
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="project-info">
                            <span className="project-category">{project.category}</span>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-year">{project.year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectGallery;
