function shuffleArray(array = []) {
  var actual = array.length,
    temp,
    random;
  while (0 !== actual) {
    random = Math.floor(Math.random() * actual);
    actual -= 1;

    temp = array[actual];
    array[actual] = array[random];
    array[random] = temp;
  }
  return array;
}

function getRandom(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  const item = array[randomIndex];

  return item;
}

export const getPokemons = async (page) => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=649"
  ).then((res) => res.json());

  const pokemons = response.results;

  const currentPokemon = getRandom(pokemons);
  const currentPokemonRes = await fetch(currentPokemon.url).then((res) =>
    res.json()
  );

  const options = [];

  options.push(currentPokemon.name);

  while (options.length < 4) {
    const option = getRandom(pokemons);
    const index = options.findIndex((item) => item?.name === option?.name);

    const doesExist = index !== -1;

    if (!doesExist) {
      options.push(option.name);
    }
  }
  const data = {
    current: {
      name: currentPokemonRes.name,
      id: currentPokemonRes.id,
      image:
        currentPokemonRes?.sprites?.versions?.["generation-v"]["black-white"][
          "animated"
        ]["front_default"],
    },
    options: shuffleArray(options),
  };
  return data;
};
