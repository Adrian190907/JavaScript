let pasillo = [".", ".", "#", ".", ".", "."]
let rechazado = []

function inicializar(){
    let posicionAleatoria = 0;

    do {

        posicionAleatoria = Math.floor(Math.random() * pasillo.length);
        
    } while (pasillo[posicionAleatoria] !== ".");
    
    pasillo[posicionAleatoria] = "S";
}

function recorrerPasillo(mensaje){
    let r = 0
    
    for(let i=0; i<pasillo.length; i++){

        if(pasillo[i] === "S"){
            r = i;
        }

    }

    if(mensaje === "derecha"){

        if(pasillo[r + 1] === "#"){

            console.log("derecha: rechazado; hay un obstaculo en la posicion" + (r + 1));
            rechazado.push("derecha");

        }else if(pasillo[r + 1] === undefined){

            console.log("derecha: rechazado; el destino queda fuera del pasillo");
            rechazado.push("derecha");

        }else{

            pasillo[r + 1] = "S";
            pasillo[r] = ".";
            console.log("derecha: aceptado; posicion " + (r + 1));

        }
    }

    if(mensaje === "izquierda"){

        if(pasillo[r - 1] === "#"){

            console.log("izquierda: rechazado; hay un obstaculo en la posicion" + (r - 1));
            rechazado.push("izquierda");

        }else if(pasillo[r - 1] === undefined){

            console.log("izquierda: rechazado; el destino queda fuera del pasillo");
            rechazado.push("izquierda");

        }else{

            pasillo[r - 1] = "S";
            pasillo[r] = ".";
            console.log("izquierda: aceptado; posicion " + (r - 1));
        }
    }
}
inicializar();
console.log(pasillo);
recorrerPasillo("derecha")
recorrerPasillo("derecha")
recorrerPasillo("izquierda")
recorrerPasillo("izquierda")
console.log("Estado final del pasillo:", pasillo);
console.log(rechazado)

