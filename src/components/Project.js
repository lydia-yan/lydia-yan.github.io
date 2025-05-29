import { ProjectCard } from "./ProjectCard";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/Summailize.png";
import projImg2 from "../assets/img/BreedFinder.png";
import projImg3 from "../assets/img/bookmark.png";

export const Project = () => {


    // Timeline project data
    const timelineProjects = [
        {
            title: "Summailize: Your Gmail AI Summary Agent",
            description: "Summailize is a lightweight AI agent that automatically summarizes Gmail messages into short, actionable insights — all through a Chrome Extension powered by a Flask backend. It helps you stay on top of your inbox without reading long emails.",
            imgUrl: projImg1,
            githubUrl: "https://github.com/lydia-yan/Summailize",
            technologies: ["React", "Node.js", "Firebase", "Chrome Extension APIs", "Flask"]
        },
        {
            title: "BreedFinder",
            description: "An iOS application that uses machine learning to identify dog breeds from photos with high accuracy. The app features a ResNet50 model trained on 70 dog breeds, a FastAPI backend, and an intuitive SwiftUI interface.",
            imgUrl: projImg2,
            githubUrl: "https://github.com/lydia-yan/BreedFinder",
            technologies: ["SwiftUI", "Python", "FastAPI", "ResNet50"]
        },
        {
            title: "bookmark-organizer",
            description: "AI-powered bookmark organizer that categorizes and tags bookmarks for easy retrieval. Users could search by tags or themes instead of manually organizing them.",
            imgUrl: projImg3,
            githubUrl: "https://github.com/lydia-yan/bookmark-organizer",
            technologies: ["JavaScript", "HTML", "CSS", "Node.js", "Chrome Extension APIs"]
        }
    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <h2>My Creative Projects</h2>
                    <p>Where imagination meets code — these are the projects I'm proud to share.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant = "pills" className=" nav-pills mb-5 justify-content-center align-items-center" id="pill-tabs">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Time Line View</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Card View</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <div className="timeline-container">
                                <div className="timeline">
                                    {timelineProjects.map((project, index) => (
                                        <div key={index} className="timeline-item">
                                            <div className="timeline-dot"></div>
                                            <div className="timeline-content">
                                                <div className="project-image">
                                                    <img src={project.imgUrl} alt={project.title} />
                                                </div>
                                                <div className="project-info">
                                                    <h4>{project.title}</h4>
                                                    <p>{project.description}</p>
                                                    <div className="technologies">
                                                        {project.technologies.map((tech, techIndex) => (
                                                            <span key={techIndex} className="tech-tag">{tech}</span>
                                                        ))}
                                                    </div>
                                                    <a 
                                                        href={project.githubUrl} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="github-link"
                                                    >
                                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                        </svg>
                                                        View on GitHub
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <Row>
                                {timelineProjects.map((project, index) => {
                                    return (
                                        <ProjectCard key={index} {...project} />
                                    )
                                })}
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="background"/>
        </section>
    )
}
export default Project;