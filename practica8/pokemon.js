const urlListaPokemon = "https://pokeapi.co/api/v2/pokemon?limit=5";
const urlDetallePokemon = "https://pokeapi.co/api/v2/pokemon/pikachu";

const respuesta1 = fetch(urlListaPokemon);
const respuesta2 = fetch(urlDetallePokemon);


respuesta1
    .then(respuesta => {
        if (!respuesta.ok) 
            throw new Error(`Error HTTP: ${respuesta.status}`);

        return respuesta.json();
    })
    .then(pokemon => {

        console.log("Objeto pokemon: ", pokemon);
        console.log("Tipo de dato: ", typeof pokemon);
        console.log("Pokemons: ", pokemon.results);
        mostrarNombres(pokemon);

    })
    .catch(error => {

        console.error("Error", error.message);

    });

function mostrarNombres(respuesta1){
    const pokemons = respuesta1.results
    .map(results => `<li>${results.name + " url: " + results.url }</li>`)
    .join("");


  document.body.innerHTML = `
    <h1>Catálogo de Pokémon</h1>
    <article>
      <h2>Lista de Pokémon</h2>
      <ul>${pokemons}</ul>

    </article>
  `;
}


respuesta2
    .then(respuesta => {
        if (!respuesta.ok) 
            throw new Error(`Error HTTP: ${respuesta.status}`);

        return respuesta.json();
    })
    .then(pokemon => {
        console.log("Nombre: ", pokemon.name)
        console.log("Numero: ", pokemon.id)
        console.log("Primer tipo: ", pokemon.types[0].type.name)
        console.log("Url imagen: ", pokemon.species.url)
    })




