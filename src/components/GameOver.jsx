import React from "react";

function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{winner ? `Winner: ${winner}` : "It's a tie!"}</p>
      <p>
        <button onClick={onRestart}>Rematch</button>
      </p>
    </div>
  );
}

export default GameOver;
