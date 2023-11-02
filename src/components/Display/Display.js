import React from "react";
import PropTypes from "prop-types";

const Display = ({ gameOver, text }) => {
  return (
    <>
      <h2>{text}</h2>
    </>
  );
};

Display.propTypes = {
  gameOver: PropTypes.string,
  text: PropTypes.string,
};

export default Display;
