import { useState } from 'react';
import { Game } from '../../domain/entities/Game';
import { updateScore } from '../../domain/usecases/updateScore';
import { Scoreboard } from '../components/scoreboard';
import { Timer } from '../components/timer';

const initialGame = new Game({ teamA: 'Equipo A', teamB: 'Equipo B' });

export default function Futbol() {
  const [game, setGame] = useState(initialGame);

  const handleUpdateScore = (team, points) => {
    const updatedGame = updateScore(game, team, points);
    setGame(updatedGame);
  };

  return (
    <div>
      <h1>Marcador - Fútbol</h1>
      <Scoreboard game={game} onUpdateScore={handleUpdateScore} />
      <Timer />
    </div>
  );
}