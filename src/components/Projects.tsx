
import React from "react";

const Portfolio: React.FC = () => {
    // Example data for projects (replace with your actual projects data)
    const projects = [
        {
            id: 1,
            title: 'Project 1',
            description: 'Description of Project 1.',
            imageUrl: 'path/to/image1.jpg',
            demoUrl: 'https://example.com/project1',
            githubUrl: 'https://github.com/username/project1',
        },
        {
            id: 2,
            title: 'Project 2',
            description: 'Description of Project 2.',
            imageUrl: 'path/to/image2.jpg',
            demoUrl: 'https://example.com/project2',
            githubUrl: 'https://github.com/username/project2',
        },
        // Add more projects as needed
    ];

    return (
        <div className="portfolio-container">
            <h1>Portfolio</h1>
            <div className="projects-container">
                {projects.map(project => (
                    <div className="project-card" key={project.id}>
                        <img src={project.imageUrl} alt={project.title} className="project-image" />
                        <div className="project-info">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <div className="project-links">
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Demo</a>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;