import { useState, useCallback } from "react";

import { randomTetrominos } from "../helpers/tetrominosHelper";
import { STAGE_WIDTH } from "../helpers/createStageHelper";

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    position: { x: 0, y: 0 },
    tetromino: randomTetrominos().shape,
    collided: false,
  });

  const updatePlayerPosition = ({ x, y, collided }) => {
    setPlayer((prev) => ({
      ...prev,
      pos: { x: (prev.position.x += x), y: (prev.position.y += y) },
      collided,
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      position: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetrominos().shape,
      collided: false,
    });
  }, []);

  return [player, updatePlayerPosition, resetPlayer];
};
