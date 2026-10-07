let palabras = ["sol","montaña","rio","bosque","mariposa","luz","montaña"];

function cuentaPalabras(palabra){
    let contador = 0;

    for(let i = 0; i < palabras.length; i ++){
        if(palabras[i] === palabra){
            contador ++;
        }else{
            console.log("No aparece esa palabra");
        }
    }

    alert("Veces que aparece " + palabra + ": " + contador);
}

function masDeCuatroPalabras(){
    const cuatroPalabras = palabras.filter((valor => valor.length >= 4 ));
    alert("Palabras con mas de cuatro caracteres: " + cuatroPalabras);
}

function buscarPosicion(palabra){
    const contador = palabras.findIndex((valor) => valor === palabra);
    alert("Primera posicion de \"" + palabra + "\": " + contador);
}

cuentaPalabras("montaña");
masDeCuatroPalabras(palabras);
buscarPosicion("rio");
buscarPosicion("nube");