import React from "react";
import PropTypes from "prop-types";
import "./styles/project.css";

const Project = ({ project }) => {
    return (
        <div className="project">
            <div className="project-info">
                <div className="title">
                    <a href={project.link}>{project.title}</a>
                </div>
                <div className="tech">
                    {project.tech}
                </div>
            </div>
            <div className="project-desc">
                {(project.image && <img src={project.image} alt="Project Image" />)}
                {project.description}
            </div>
        </div>
    )
};

Project.propTypes = {
    project: PropTypes.object
}

export default Project;