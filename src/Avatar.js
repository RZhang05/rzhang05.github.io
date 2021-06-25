import React from "react";
import logo from "./resources/slow loris.png";
import "./styles/avatar.css"

const Avatar = () => {
    return (
        <div className="image-container">
            <img src={logo} alt="Logo" />
        </div>
    )
};

export default Avatar;