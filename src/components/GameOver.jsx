import "../App.css";

function GameOver(props) {
  return (
    <main>
      <div
        id="game_body"
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#67a0fb",
        }}
      >
        <div style={{ fontSize: 28, color: "#373740" }}>Oh, so close!</div>
        <div style={{ fontSize: 45, color: "#e84a44", padding: 10 }}>
          Pokemons Caught:{" "}
          <span style={{ color: "#67a0fb" }}>{props.currentScore}</span>
        </div>
        <div id="pokemons_caught">
          {props.storage.map((pokemon) => (
            <img key={pokemon} src={pokemon} />
          ))}
        </div>
        <button
          style={{ margin: 10 }}
          onClick={() => {
            props.setView(0);
            props.setTimer(15);
            props.setTimerLine(0);
            props.setCurrentScore(0);
            props.setStorage([]);
          }}
        >
          Try Again
        </button>
      </div>
    </main>
  );
}

export default GameOver;
