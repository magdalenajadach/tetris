import "./Game.scss";
import Stage from "../Stage/Stage";
import Button from "../shared/Button/Button";
import StartButton from "../StartButton/StartButton";
import React, { useState } from "react";
import { createStage } from "../../helpers/createStageHelper";
import { StyledGame, StyledGameWraper } from "../styles/StyledGame";
import { usePlayer } from "../../hooks/usePlayer";
import { useStage } from "../../hooks/useStage";

const Game = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [player, updatePlayerPosition, resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player);

  console.log("re-render");

  const movePlayer = (dir) => {
    updatePlayerPosition({ x: dir, y: 0 });
  };

  const startGame = () => {
    //reset the game
    setStage(createStage());
    resetPlayer();
  };

  const drop = () => {
    updatePlayerPosition({ x: 0, y: 1, collided: false });
  };

  const dropPlayer = () => {
    drop();
  };

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        // 37 - arrow left
        movePlayer(-1);
      } else if (keyCode === 39) {
        // 39 - arrow right
        movePlayer(1);
      } else if (keyCode === 40) {
        // 40 - arrow down
        dropPlayer();
      }
    }
  };

  return (
    <StyledGameWraper role="button" tabIndex="0" onKeyDown={(e) => move(e)}>
      <StyledGame>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Button gameOver={gameOver} text="Game over" />
          ) : (
            <div>
              <Button text="Score" />
              <Button text="Level" />
              <Button text="Rows" />
            </div>
          )}
          <StartButton onClick={startGame} />
        </aside>
      </StyledGame>
    </StyledGameWraper>
  );
};

Game.propTypes = {};

export default Game;
