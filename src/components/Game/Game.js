import "./Game.scss";
import Square from "../Square/Square";
import Stage from "../Stage/Stage";
import Button from "../shared/Button/Button";
import StartButton from "../StartButton/StartButton";
import React from "react";
import { createStage } from "../../helpers/gameHelpers";

const Game = ({}) => {
  return (
    <>
      <Stage stage={createStage()}/>
      <aside>
        <Button text="Score" />
        <Button text="Level" />
        <StartButton />
      </aside>
    </>
  );
};

Game.propTypes = {};

export default Game;
