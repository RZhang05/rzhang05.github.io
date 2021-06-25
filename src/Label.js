import React from "react";
import PropTypes from "prop-types";
import "./styles/label.css"

const Label = ({ text, font_size, link }) => {
    return (
        <div className="label" style={{ fontSize: font_size }}>
            {(link ? <a href={text}>{text}</a> : text)}
        </div>
    )
};

Label.propTypes = {
    text: PropTypes.string,
    font_size: PropTypes.string,
    link: PropTypes.bool
}

export default Label;