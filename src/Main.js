import React from "react";
import "./styles/main.css";
import PropTypes from "prop-types";
import ProjectContainer from "./ProjectContainer";
import Toggle from "./Toggle";
import resume from "./resources/resume2021-1.pdf";
import transcript from "./resources/SSR_TSRPT.pdf";
import aicert from "./resources/AiCert.pdf";
import azurecert from "./resources/AzureCert.pdf";

const Main = ({ handlePress }) => {
    return (
        <div className="right-content">
            <Toggle handlePress={handlePress} />
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
            <div className="subheader">Documents</div>
            <a href={resume} style={{display:"block", marginBottom:"10px"}} download="resume">Download Resume</a>
            <a href={transcript} style={{display:"block", marginBottom:"10px"}} download="transcript">Download Academic Transcript</a>
            <a href={azurecert} style={{display:"block", marginBottom:"10px"}} download="azurecert">Download Microsoft Azure Fundamentals Certification Proof</a>
            <a href={aicert} style={{display:"block", marginBottom:"10px"}} download="aicert">Download Microsoft Azure AI Fundamentals Certification Proof</a>
            <div className="subheader"></div>
        </div>
    )
};

Main.propTypes = {
    handlePress: PropTypes.func
}

export default Main;