import React from 'react';
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
    {
        id: 1,
        title: 'Luxury Residence',
        category: 'Residential',
        year: '2024',
        image: `${BASE}assets/projects/project-1.jpg`
    },
    {
        id: 2,
        title: 'Modern Villa',
        category: 'Residential',
        year: '2023',
        image: `${BASE}assets/projects/project-2.jpg`
    },
    {
        id: 3,
        title: 'Corporate Complex',
        category: 'Commercial',
        year: '2023',
        image: `${BASE}assets/projects/project-3.jpg`
    },
    {
        id: 4,
        title: 'Drawing Room Interior',
        category: 'Interior',
        year: '2025',
        image: `${BASE}assets/projects/project-4.jpg`
    },
    {
        id: 5,
        title: 'Master Bedroom Suite',
        category: 'Interior',
        year: '2024',
        image: `${BASE}assets/projects/project-5.jpg`
    },
    {
        id: 6,
        title: 'Bedroom Suite',
        category: 'Interior',
        year: '2024',
        image: `${BASE}assets/projects/project-6.jpg`
    }
];

const ProjectGallery: React.FC = () => {
    return (
        <div className="project-gallery grid grid-3">
            {projects.map((project) => (
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
    );
};

export default ProjectGallery;
