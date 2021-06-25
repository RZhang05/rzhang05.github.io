import React from "react";
import Project from "./Project";
import "./styles/container.css";
import twotter from "./resources/twotterbird.png";
import moodle from "./resources/moodlehomepage.png";
import example from "./resources/blobfacepalm.png";

const projects = [
    {
        "title": "Twotter",
        "link": "https://github.com/SlowestLoris/Twotter",
        "tech": "Django, Python, HTML, CSS, JS",
        "image": twotter,
        "description": "A functional clone of Twitter."
    },
    {
        "title": "Learn 2.0",
        "link": "https://github.com/q-ata/alpha-beaver",
        "tech": "MERN, HTML, CSS, JS",
        "image": moodle,
        "description": "An innovative LMS."
    },
    {
        "title": "Example",
        "link": "https://github.com/q-ata/alpha-beaver",
        "tech": "Buncha stuff",
        "image": example,
        "description": "An amazing thingy."
    }
];

const Container = () => {
    let key = 0;

    return (
        <div className="container">
            { projects.map((project) => {
                return <Project key={key++} project={project} />
            })}
        </div>
    )
};

export default Container;