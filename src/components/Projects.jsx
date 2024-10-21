import './Projects.css';

const Projects = () => {
    const projects = [
        { name: 'Phot Management App', link: 'https://photo-managament-app.netlify.app/' },
        { name: 'Dharam Music', link: 'https://mydharammusic.me/' },
    ];

    return (
        <div id="projects" className="projects">
            <h2>My Projects</h2>
            <div className="projects-list">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <div className="project-content">
                                <h3>{project.name}</h3>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
