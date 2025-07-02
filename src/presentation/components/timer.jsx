import { useEffect, useState } from 'react';

export function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else if (!running && interval) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div>
      <h3>Tiempo: {Math.floor(seconds / 60)}:{seconds % 60}</h3>
      <button onClick={() => setRunning(true)}>Iniciar</button>
      <button onClick={() => setRunning(false)}>Pausar</button>
      <button onClick={() => setSeconds(0)}>Reiniciar</button>
    </div>
  );
}