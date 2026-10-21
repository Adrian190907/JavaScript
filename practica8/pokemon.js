const urlListaPokemon = "https://pokeapi.co";

function esperar(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Cargando...");
        }, ms);
    });
}

function obtenerDatos(url) {
    return fetch(url)
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error(`Error HTTP: ${respuesta.status}`);
            }
            return respuesta.json();
        })
        .then(datos => {
            // ¡CORREGIDO! 'results' es un array, necesitas [0] para el primer Pokémon
            const urlPrimerPokemon = datos.results[0].url; 
            return fetch(urlPrimerPokemon);
        })
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error(`Error HTTP: ${respuesta.status}`);
            }
            return respuesta.json();
        });
}

function mostrarPokemon(pokemon) {
    const nombre = pokemon.name;
    const id = pokemon.id;
    // ¡CORREGIDO! 'types' es un array, necesitas [0] para el primer tipo
    const tipo = pokemon.types[0].type.name; 
    const imagen = pokemon.sprites.front_default; 

    document.body.innerHTML = `
        <div class="tarjeta-pokemon">
            <h1>Detalle de Pokémon</h1>
            <img src="${imagen}" alt="${nombre}">
            <h2>${nombre}</h2>
            <p>Id: ${id}</p>
            <p>Tipo: ${tipo}</p>
        </div>
    `;
}

document.body.innerHTML = "<h1>Cargando...</h1>";

esperar(5000)
    .then(() => {
        return obtenerDatos(urlListaPokemon);
    })
    .then(pokemon => {
        mostrarPokemon(pokemon);
    })
    .catch(error => {
        console.error("Error detectado:", error.message);
        document.body.innerHTML = `<h1>Ha ocurrido un error: ${error.message}</h1>`;
    })
    .finally(() => {
        console.log("La petición a la API ha terminado.");
    });




