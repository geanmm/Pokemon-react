import "../App.css";

function Start(props) {
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
        <div style={{ fontSize: 35, color: "#e84a44" }}>Rules:</div>
        <div
          style={{
            fontSize: 23,
            color: "#373740",
            textAlign: "center",
            padding: "10px 0 20px 0",
            // alignItems: "center",
          }}
        >
          <div>
            {" "}
            <b>1.</b> You have 15 seconds for each pokémon.
          </div>
          <div>
            <b>2.</b> Any wrong answer will end the game.
          </div>
          <div>
            <b>3.</b> Get 10 pokemons right and win.
          </div>
        </div>
        <button
          style={{ margin: 10 }}
          onClick={() => {
            props.setTimer(14);
            props.setTimerLine(0);
            props.setView(1);
          }}
        >
          Start
        </button>
      </div>
    </main>
  );
}

export default Start;
