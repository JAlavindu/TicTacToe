import { useState } from "react";

import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

function deriveActivePlayer(gameTurns) {
  let currentPalyer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPalyer = "O";
  }

  return currentPalyer;
}

function App() {
  //const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelctSquare(rowIndex, colIndex) {
    // setActivePlayer((prevActivePlayer) => {
    //   return prevActivePlayer === "X" ? "O" : "X";
    // });

    setGameTurns((prevTurns) => {
      currentPalyer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard onSelectSquare={handleSelctSquare} turns={gameTurns} />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
