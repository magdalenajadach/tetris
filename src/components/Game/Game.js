import React, { useState } from "react";
import { createStage, checkCollision } from "../../helpers/createStageHelper";
import { StyledGame, StyledGameWraper } from "../styles/StyledGame";
import { usePlayer } from "../../hooks/usePlayer";
import { useStage } from "../../hooks/useStage";
import Stage from "../Stage/Stage";
import Button from "../shared/Button/Button";
import StartButton from "../StartButton/StartButton";

const Game = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [player, updatePlayerPosition, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage] = useStage(player);

  console.log("re-render");

  const movePlayer = (dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPosition({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    // reset the game
    setStage(createStage());
    resetPlayer();
    setGameOver(false);
  };

  const drop = () => {
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPosition({ x: 0, y: 1, collided: false });
    } else {
      if (player.position.y < 1) {
        // Game over
        console.log("game over");
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPosition({ x: 0, y: 0, collided: true });
    }
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
      } else if (keyCode === 38) {
        // 38 - arrow up?
        playerRotate(stage, 1);
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
          <StartButton callback={startGame} />
        </aside>
      </StyledGame>
    </StyledGameWraper>
  );
};

export default Game;
