const urlListaPokemon = "https://pokeapi.co/api/v2/pokemon?limit=5";

function mostrarPokemon(pokemon) {

    document.body.innerHTML = `
    <h1>Catálogo de Pokémon</h1>
    <article>
      <h2>${pokemon.name}</h2>
      <p>Número: ${pokemon.id}</p>
      <p>Primer tipo: ${pokemon.types[0].type.name}</p>
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    </article>`;
    
}

async function cargarPokemon() {
    document.body.innerHTML = "<h1>Catálogo de Pokémon</h1><p>Cargando...</p>";

    try {

        const respuestaLista = await fetch(urlListaPokemon);

        if (!respuestaLista.ok) {
            throw new Error(`Error HTTP: ${respuestaLista.status}`);
        }

        const listaPokemons = await respuestaLista.json();

        const respuestaPokemon = await fetch(listaPokemons.results[0].url);

        if (!respuestaPokemon.ok) {
            throw new Error(`Error HTTP: ${respuestaPokemon.status}`);
        }

        const pokemon = await respuestaPokemon.json();

        mostrarPokemon(pokemon);

    } catch (error) {

        console.error("Error", error.message);
        document.body.innerHTML = `
        <h1>Catálogo de Pokémon</h1>
        <p>No se pudo cargar el Pokémon: ${error.message}</p>`;

    } finally {
        console.log("Petición terminada");
    }
}

cargarPokemon();