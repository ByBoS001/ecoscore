export function updateScore(game, team, points) {
  if (team === 'A') {
    game.scoreA += points;
  } else if (team === 'B') {
    game.scoreB += points;
  }
  return { ...game };
}