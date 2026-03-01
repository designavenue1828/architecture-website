import React, { useRef, useState } from 'react';
import ProjectGallery from '../../components/ProjectGallery';
import './Projects.css';

const BASE = import.meta.env.BASE_URL;

const Projects: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = useState(false);

    const togglePlay = () => {
        if (!videoRef.current) return;
        if (playing) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setPlaying(!playing);
    };

    return (
        <div className="projects-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Our Projects</h1>
                    <p className="page-description">
                        Explore our portfolio of innovative architectural designs across residential, commercial, and interior spaces.
                    </p>
                </div>
            </div>

            {/* Video Reel Section */}
            <section className="reel-section section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Interior Design Reel</h2>
                        <p>A walkthrough of our finest interior design work</p>
                    </div>
                    <div className="reel-wrapper glass-card">
                        <video
                            ref={videoRef}
                            className="reel-video"
                            src={`${BASE}assets/reel.mp4`}
                            poster={`${BASE}assets/projects/wa-10.jpg`}
                            controls
                            preload="metadata"
                            onPlay={() => setPlaying(true)}
                            onPause={() => setPlaying(false)}
                            onEnded={() => setPlaying(false)}
                        />
                        {!playing && (
                            <button className="play-btn" onClick={togglePlay} aria-label="Play reel">
                                <span className="play-icon">▶</span>
                            </button>
                        )}
                    </div>
                </div>
            </section>

            {/* Project Gallery */}
            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Project Gallery</h2>
                        <p>Filter by category to explore our work</p>
                    </div>
                    <ProjectGallery />
                </div>
            </section>
        </div>
    );
};

export default Projects;
