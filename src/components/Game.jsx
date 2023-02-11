import React, { useEffect, useState } from "react";
import "../App.css";
import { content, getPokemons } from "../consts/PokemonAPI";

function Game() {
  const [pokemonView, setpokemonView] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [data, setData] = useState(content);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const content = async () => {
      const data = await getPokemons();
      setData(data);
    };
    content();
  }, [page]);

  function checkAnswer(item) {
    if (item === data.current.name) {
      setpokemonView(1);
      setCurrentScore(currentScore + 1);
    } else {
      setpokemonView(2);
    }
  }

  return (
    <div id="game">
      <header>
        <div id="title">Who's that pokémon?</div>
        <div id="timer">
          <div id="timer_text">Time Left:</div>
          <div id="timer_counter">15</div>
        </div>
        <div id="timer_line" />
      </header>
      <main>
        <section id="game_body">
          <div id="image_container">
            <div
              // src={content.current.image}
              id="pokemon_img"
              className={pokemonView !== 0 ? "" : "shadow"}
              style={{
                backgroundImage: `url(${data.current.image})`,
              }}
            />
          </div>
          <div
            id="answer_options"
            className={pokemonView !== 0 ? "disabled" : ""}
          >
            {data.options.map((item) => (
              <li
                key={item}
                onClick={() => {
                  checkAnswer(item);
                }}
              >
                {item}
              </li>
            ))}
          </div>
        </section>
        <section id="pokemon_data">
          <div id="pokemon_info">
            {pokemonView === 0
              ? "# - Pokemon Name"
              : `${data.current.id} - ${data.current.name}`}
          </div>
          <button
            id="btn_next"
            className={pokemonView === 1 ? "" : "hidden"}
            onClick={() => {
              setPage(page + 1);
              setpokemonView(0);
            }}
          >
            Next
          </button>
        </section>
      </main>
      <footer>
        <div>
          Current Score: <span id="score">{currentScore}</span>
        </div>
      </footer>
    </div>
  );
}
export default Game;
