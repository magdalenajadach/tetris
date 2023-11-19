import React from "react";
import PropTypes from "prop-types";
import { StyledSquare } from "../styles/StyledSquare";
import { TETROMINOS } from "../../helpers/tetrominosHelper";

const Square = ({ type }) => {
  return <StyledSquare type={type} color={TETROMINOS[type].color} />;
};

Square.propTypes = {
  type: PropTypes.number,
};
export default Square;
