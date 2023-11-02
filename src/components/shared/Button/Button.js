import React from "react";
import PropTypes from "prop-types";

const Button = ({ gameOver, text }) => {
  return (
    <>
      <h2>{text}</h2>
    </>
  );
};

Button.propTypes = {
  gameOver: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
