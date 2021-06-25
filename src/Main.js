import React from "react";
import "./styles/main.css";
import ProjectContainer from "./ProjectContainer";

const Main = () => {
    return (
        <div className="right-content">
            <div className="header">Hello.</div>
            <div className="bio">
                My name is Raymond Zhang. I am a Software Engineering student at the University of Waterloo.
                I am interested in computer vision, web design, big data and cloud computing. Welcome to my personal website!
            </div>
            <div className="bio">
                If you are interested in knowing more, feel free to look through my projects, download my cv or academic transcript.
            </div>
            <div className="subheader">Projects</div>
            <ProjectContainer />
        </div>
    )
};

export default Main;