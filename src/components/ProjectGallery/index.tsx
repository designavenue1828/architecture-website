import React from 'react';
import './ProjectGallery.css';

interface Project {
    id: number;
    title: string;
    category: string;
    year: string;
    image: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: 'Modern Residential Villa',
        category: 'Residential',
        year: '2023',
        image: 'gradient-1'
    },
    {
        id: 2,
        title: 'Corporate Office Tower',
        category: 'Commercial',
        year: '2023',
        image: 'gradient-2'
    },
    {
        id: 3,
        title: 'Urban Mixed-Use Development',
        category: 'Urban Planning',
        year: '2022',
        image: 'gradient-3'
    },
    {
        id: 4,
        title: 'Sustainable Community Center',
        category: 'Public',
        year: '2022',
        image: 'gradient-4'
    },
    {
        id: 5,
        title: 'Luxury Apartment Complex',
        category: 'Residential',
        year: '2023',
        image: 'gradient-5'
    },
    {
        id: 6,
        title: 'Innovation Hub',
        category: 'Commercial',
        year: '2024',
        image: 'gradient-6'
    }
];

const ProjectGallery: React.FC = () => {
    return (
        <div className="project-gallery grid grid-3">
            {projects.map((project) => (
                <div key={project.id} className="project-card glass-card">
                    <div className={`project-image ${project.image}`}></div>
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
