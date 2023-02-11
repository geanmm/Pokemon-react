import { useState } from "react";
import "./App.css";
import Game from "./components/Game";

function App() {
  const [view, setView] = useState(0);

  function setCurrentView(currentView) {
    switch (currentView) {
      case 1:
        return <Game setView={setView} />;

      default:
        return <Game setView={setView} />;
    }
  }

  return setCurrentView(view);
}

export default App;
