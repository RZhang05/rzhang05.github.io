import React from "react";
import PropTypes from "prop-types";
import "./styles/toggle.css";

const Toggle = ({ handlePress }) => {
    return (
        <button onClick={handlePress}>Switch theme</button>
    )
};

Toggle.propTypes = {
    handlePress: PropTypes.func
}

export default Toggle;