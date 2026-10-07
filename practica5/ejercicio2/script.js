let pasillo = [".", ".", "#", ".", ".", "."]

function inicializar(){
    do {
        posicionAleatoria = Math.floor(Math.random() * pasillo.length);
    } while (pasillo[posicionAleatoria] !== ".");
    
    pasillo[posicionAleatoria] = "S";
}

inicializar();
console.log(pasillo);