export function Scoreboard({ game, onUpdateScore }) {
  return (
    <div>
      <h2>{game.teamA}: {game.scoreA}</h2>
      <button onClick={() => onUpdateScore('A', 1)}>+1</button>
      <button onClick={() => onUpdateScore('A', -1)}>-1</button>

      <h2>{game.teamB}: {game.scoreB}</h2>
      <button onClick={() => onUpdateScore('B', 1)}>+1</button>
      <button onClick={() => onUpdateScore('B', -1)}>-1</button>
    </div>
  );
}