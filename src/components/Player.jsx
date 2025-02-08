import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    setIsEditing((editing) => !editing);
    onChangeName(symbol, playerName);
  };

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{initialName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        require
        d
        value={playerName}
        onChange={handleChange}
      ></input>
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}

        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
