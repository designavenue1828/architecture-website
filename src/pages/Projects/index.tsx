import React from 'react';
import ProjectGallery from '../../components/ProjectGallery';
import './Projects.css';

const Projects: React.FC = () => {
    return (
        <div className="projects-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Our Projects</h1>
                    <p className="page-description">
                        Click any image to view it in full screen. Filter by category to explore our work.
                    </p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <ProjectGallery />
                </div>
            </section>
        </div>
    );
};

export default Projects;
