import React from "react";
import Label from "./Label";
import "./styles/information.css";

const info = [
    "zhangraymond05@gmail.com",
    "416-317-2218",
    "https://www.linkedin.com/in/rayzhang05/",
    "https://github.com/SlowestLoris/"
]

const Information = () => {
    return (
        <div className="info-box">
            <Label text={"Raymond Zhang"} font_size={"2vw"} />
            {
                info.map((text) => {
                    return (text.includes("https://") ? 
                    <Label text={text} font_size={"0.8vw"} link={true} /> : 
                    <Label text={text} font_size={"0.8vw"} link={false} />)
                })
            }
        </div>
    )
};

export default Information;