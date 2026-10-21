const urlPokemons = "https://pokeapi.co/api/v2/pokemon?limit=5";
const urlPikachu = "https://pokeapi.co/api/v2/pokemon/pikachu";

function obtenerDatos(url) {

  return fetch(url)
    .then((respuesta) => {

        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }

        return respuesta.json();
    });
}

function mostrarPokemon(url) {
  return fetch(url)
    .then((respuesta) => {

        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }

        return respuesta.json();
    })
    .then((pokemon) => {
        console.log("Nombre: ", pokemon.name);
        console.log("Id: ", pokemon.id);
        console.log("Primer tipo: ", pokemon.types[0].type.name);
        console.log("Url imagen: ", pokemon.sprites.front_default);

        document.body.innerHTML = `
          <h1>Pokedex</h1>
          <div>
            <h2>${pokemon.name}</h2>
            <p>Id: ${pokemon.id}</p>
            <p>Primer tipo: ${pokemon.types[0].type.name}</p>
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
          </div>
        `;
    });
}

function esperar(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Cargando Pikachu...");
    }, ms);
  });
}

document.body.innerHTML = "<h1>Pokedex</h1><p>Cargando...</p>";

obtenerDatos(urlPokemons)

    .then((listaPokemons) => {

        console.log("Lista de Pokémons: ", listaPokemons);
        console.log("Tipo de dato: ", typeof listaPokemons);
        console.log("Pokemons: ", listaPokemons.results);
        return mostrarPokemon(listaPokemons.results[0].url);

  }).then(() => {

        document.body.innerHTML += `<p>Cargando pikachu..</p>`;
        return esperar(5000);

  }).then(() => mostrarPokemon(urlPikachu))
    .catch((error) => {

        console.error("Error", error.message);
        document.body.innerHTML = `<h1>Pokedex </h1>
        <p>No se pudo cargar el Pokémon: ${error.message}</p>`;

  }).finally(() => console.log("Petición terminada"));
