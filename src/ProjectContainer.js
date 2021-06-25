import React from "react";
import Project from "./Project";

const projects = [
    {
        "title": "Example project",
        "link": "https://github.com/q-ata/alpha-beaver",
        "tech": "MERN"
    },
    {
        "title": "Example project",
        "link": "https://github.com/q-ata/alpha-beaver",
        "tech": "MERN"
    }
];

const Container = () => {
    return (
        <div className="container">
            { projects.map((project) => {
                return <Project project={project} />
            })}
        </div>
    )
};

export default Container;