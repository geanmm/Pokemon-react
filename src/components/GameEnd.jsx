import "../App.css";

function GameEnd(props) {
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
        <div style={{ fontSize: 28, color: "#373740" }}>Congrats!</div>
        <div style={{ fontSize: 30, color: "#e84a44", padding: 10 }}>
          Your prize is... <span style={{ color: "#67a0fb" }}>Nothing</span>
        </div>
        <img
          src="/src/assets/pika.gif"
          style={{ width: 150, marginBottom: 10 }}
        />

        <button
          style={{ margin: 10 }}
          onClick={() => {
            props.setTimer(15);
            props.setTimerLine(0);
            props.setStorage([]);
            props.setCurrentScore(0);
            props.setView(0);
          }}
        >
          Play Again
        </button>
      </div>
    </main>
  );
}

export default GameEnd;
