import React from "react";
import PropTypes from "prop-types";
import { StyledStartButton } from "../styles/StyledStartButton";

const StartButton = ({ callback }) => {
  return <StyledStartButton onClick={callback}>Start the game</StyledStartButton>;
};

StartButton.propTypes = {
  callback: PropTypes.string,
};

export default StartButton;
