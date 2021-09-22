import React from "react";
import Project from "./Project";
import "./styles/container.css";
import twotter from "./resources/Twotter-logo.png";
import moodle from "./resources/ab.png";
import example from "./resources/github.png";
import dj from "./resources/dailyjourney.jpg";

const projects = [
    {
        "title": "Daily Journey",
        "link": "https://github.com/q-ata/daily-journey",
        "tech": "Django, Python, React, JS",
        "image": dj,
        "description": "Find a circular running route with Google Maps API."
    },
    {
        "title": "Twotter",
        "link": "https://github.com/SlowestLoris/Twotter",
        "tech": "Django, Python, HTML, CSS, JS",
        "image": twotter,
        "description": "Twotter is designed to be a functional Twitter clone, complete with user profiles, tweets (twoots) and private chat."
    },
    {
        "title": "Alpha-beaver",
        "link": "https://github.com/q-ata/alpha-beaver",
        "tech": "MERN, HTML, CSS, JS",
        "image": moodle,
        "description": "A learning management system built with the MERN stack."
    },
    {
        "title": "ElectionForm",
        "link": "https://github.com/SlowestLoris/ElectionForm",
        "tech": "JS, Google Apps Script",
        "image": example,
        "description": "Script to automate form creation and result collection for an election."
    }
];

const Container = () => {
    let key = 0;

    return (
        <div className="container">
            { projects.map((project) => {
                return <Project key={key++} project={project} />
            })}
            <div style={{fontSize:"3vh"}}>To see more, check out my github!</div>
        </div>
    )
};

export default Container;