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
                        Explore our portfolio of innovative architectural designs across residential, commercial, and public spaces.
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
