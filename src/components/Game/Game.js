import "./Game.scss";
import Square from "../Square/Square";
import Stage from "../Stage/Stage";
import Button from "../shared/Button/Button";
import StartButton from "../StartButton/StartButton";
import React from "react";
import { createStage } from "../../helpers/createStageHelper";
import { StyledGame, StyledGameWraper } from "../styles/StyledGame";

const Game = ({}) => {
  return (
    <StyledGameWraper>
      <StyledGame>
        <Stage stage={createStage()} />
        <aside>
          <Button text="Score" />
          <Button text="Level" />
          <StartButton />
        </aside>
      </StyledGame>
    </StyledGameWraper>
  );
};

Game.propTypes = {};

export default Game;
