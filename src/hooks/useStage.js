import { useState } from "react";
import { createStage } from "../helpers/createStageHelper";

export const useStage = () => {
  const [stage, setStage] = useState(createStage());
  return [stage, setStage];
};
