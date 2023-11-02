import { Grid } from "./components/Grid/Grid";
import React from "react";

import PropTypes from "prop-types";

const Stage = ({ stage }) => {
  return (
    <>
      <div>
        <Grid />
      </div>
    </>
  );
};

Stage.propTypes = {
  stage: PropTypes.string,
};

export default Stage;
