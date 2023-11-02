import React from "react";
import PropTypes from "prop-types";

import Square from "../Square/Square";

const Stage = ({ stage }) => {
  return (
    <div>
      {stage.map((row) =>
        row.map((square, x) => <Square key={x} type={square[0]} />)
      )}
    </div>
  );
};

Stage.propTypes = {
  stage: PropTypes.string,
};

export default Stage;
