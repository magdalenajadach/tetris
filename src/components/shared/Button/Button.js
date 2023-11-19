import React from "react";
import PropTypes from "prop-types";

const Button = ({ gameOver, text }) => {
  return <button gameOver={gameOver}>{text}</button>;
};

Button.propTypes = {
  gameOver: PropTypes.func,
  text: PropTypes.string,
};

export default Button;
