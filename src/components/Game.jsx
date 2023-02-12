import React, { useEffect, useState } from "react";
import "../App.css";
import { getPokemons } from "../consts/PokemonAPI";

function Game(props) {
  const [loading, setLoading] = useState(true);
  const [pokemonView, setpokemonView] = useState(0);
  const [page, setPage] = useState(0);
  // const [storage, setStorage] = useState([]);

  const [data, setData] = useState(0);

  useEffect(() => {
    const content = async () => {
      const data = await getPokemons(page);
      setData(data);
      setLoading(false);
    };
    content();
  }, [page]);

  function checkAnswer(item) {
    if (item === data.current.name) {
      setpokemonView(1);
      props.setTimer("15");
      props.setCurrentScore(props.currentScore + 1);
      props.setTimerLine("600");
      props.setStorage((prevStorage) => [...prevStorage, data.current.image]);
      // console.log(storage);
    } else {
      setTimeout(() => {
        props.setView(2);
        props.setTimer("15");
        props.setTimerLine("600");
      }, 2000);
    }
  }

  if (loading) return;
  return (
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
            props.setTimer(15);
            props.setTimerLine(0);
            setpokemonView(0);
          }}
        >
          Next
        </button>
      </section>
    </main>
  );
}
export default Game;
