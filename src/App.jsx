import { useEffect, useState } from "react";
import "./App.css";
import Start from "./components/Start";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import GameEnd from "./components/GameEnd";

function App() {
  const [view, setView] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [timer, setTimer] = useState(15);
  const [timerLine, setTimerLine] = useState(0);

  const [storage, setStorage] = useState([]);

  useEffect(() => {
    if (!view) return;
    if (currentScore === 10) return setView(3);

    if (!timer) return setView(2);

    const counter = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    if (timer === String(timer)) return clearInterval(counter);

    return () => clearInterval(counter);
  }, [timer]);

  useEffect(() => {
    if (!view) return;
    // if (timerLine === String(timerLine)) return;
    const counterLine = setTimeout(() => {
      setTimerLine(timerLine + 1);
    }, 21);

    if (timerLine >= 600) return clearInterval(counterLine);

    return () => clearInterval(counterLine);
  });

  function setCurrentView(currentView) {
    switch (currentView) {
      case 1:
        return (
          <Game
            setView={setView}
            currentScore={currentScore}
            setCurrentScore={setCurrentScore}
            timer={timer}
            setTimer={setTimer}
            setTimerLine={setTimerLine}
            setStorage={setStorage}
          />
        );

      case 2:
        return (
          <GameOver
            setView={setView}
            currentScore={currentScore}
            setCurrentScore={setCurrentScore}
            setTimer={setTimer}
            setTimerLine={setTimerLine}
            storage={storage}
            setStorage={setStorage}
          />
        );
      case 3:
        return (
          <GameEnd
            setView={setView}
            currentScore={currentScore}
            setCurrentScore={setCurrentScore}
            setTimer={setTimer}
            setTimerLine={setTimerLine}
            storage={storage}
            setStorage={setStorage}
          />
        );

      default:
        return (
          <Start
            setTimer={setTimer}
            setTimerLine={setTimerLine}
            setView={setView}
          />
        );
    }
  }

  return (
    <div id="game">
      <header>
        <div id="title">Who's that pokémon?</div>
        <div id="timer">
          <div id="timer_text">Time Left:</div>
          <div id="timer_counter">{timer}</div>
        </div>
        <div id="timer_line" style={{ width: timerLine }} />
      </header>
      <div>{setCurrentView(view)}</div>
      <footer>
        <div>
          Pokemons Caught: <span id="score">{currentScore}</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
