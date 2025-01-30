export default function Log({ gameTurns }) {
  return (
    <ol id="log">
      {gameTurns.map((turn, index) => {
        const { player, square } = turn;
        const { row, col } = square;
        return (
          <li key={index}>
            {player} played in row {row}, col {col}
          </li>
        );
      })}
    </ol>
  );
}
