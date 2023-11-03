import React from "react";
import PropTypes from "prop-types";
import { StyledSquare } from "../styles/StyledSquare";
import { TETROMINOS } from "../../helpers/tetrominosHelper";

const Square = ({ type }) => {
  return <StyledSquare type={"L"} color={TETROMINOS["L"].color} />;
};

Square.propTypes = {
  type: PropTypes.string,
};
export default Square;
