import React from "react";
import PropTypes from "prop-types";

const StartButton = ({ callback }) => {
  return (
    <>
      <h2>Start the game</h2>
    </>
  );
};

StartButton.propTypes = {
  callback: PropTypes.string,
};

export default StartButton;
