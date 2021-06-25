import React from "react";
import Avatar from "./Avatar";
import Information from "./Information";
import "./styles/profile.css";

const Profile = () => {
    return (
        <div className="left-bar">
            <Avatar />
            <Information />
        </div>
    )
};

export default Profile;