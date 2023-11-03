import React from "react";
import PropTypes from "prop-types";

import Square from "../Square/Square";
import { StyledStage } from "../styles/StyledStage";

const Stage = ({ stage }) => {
  return (
    <StyledStage width={stage[0].length} height={stage.length}>
      {stage.map((row) =>
        row.map((square, x) => <Square key={x} type={square[0]} />)
      )}
    </StyledStage>
  );
};

Stage.propTypes = {
  stage: PropTypes.string,
};

export default Stage;
