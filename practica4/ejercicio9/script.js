function establecerIntentos(dificultad) {
    switch (dificultad) {
        case "1": return 10;
        case "2": return 5;
        case "3": return 3;
        default: return 5;
    }
}

function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}

function validarIntento(entradaTexto) {
    if (entradaTexto === "" || entradaTexto === null) {
        return "vacio";
    }

    const numero = parseInt(entradaTexto);

    if (Number.isNaN(numero)) {
        return "texto";
    }

    if (numero < 1 || numero > 100) {
        return "fuera_rango";
    }

  return numero;
}

function compararIntento(intento, numeroAleatorio) {
    if (intento < numeroAleatorio)
        return "Mayor";
    else if (intento > numeroAleatorio) 
        return "Menor";
    
    return "Acertado";
}

let puntuacionAcumulada = 0;

function jugarRonda(dificultad) {
    let intentosRestantes = establecerIntentos(dificultad);
    const numeroSecreto = generarNumeroAleatorio();

    alert("Ronda iniciada");

    while (intentosRestantes > 0) {
        const entrada = prompt(`Número (Intentos: ${intentosRestantes}):`);
        const validacion = validarIntento(entrada);

        if (validacion === "vacio") {
            if (confirm("¿Salir de la ronda?")) {
                break;
            }
            continue;
        }

        if (validacion === "texto" || validacion === "fuera_rango") {
            alert("Número no válido (debe ser de 1 a 100).");
            continue;
        }

        const comparacion = compararIntento(validacion, numeroSecreto);

        if (comparacion === "Acertado") {
            puntuacionAcumulada += 10;
            alert(`Acertaste, 3l número era ${numeroSecreto}.`);
            break; 
        }

    intentosRestantes--;
    puntuacionAcumulada -= 1;

    if (intentosRestantes > 0) {
      alert(`El número es ${comparacion}.`);
    } else {
      alert(`Te has quedado sin intentos. Era el ${numeroSecreto}.`);
    }
  }

    alert(`Puntos actuales: ${puntuacionAcumulada}`);
}

function jugarPartida(dificultadInicial = "2") {
    let dificultad = dificultadInicial;
  
    while (true) {
        const menuDificultad = prompt(
            `Puntos: ${puntuacionAcumulada}\n` +
            `Dificultad: ${dificultad}\n\n` +
            `1. Fácil\n` +
            `2. Normal\n` +
            `3. Difícil\n` +
            `4. Jugar\n` +
            `5. Salir`
        );

        if (menuDificultad === "5" || menuDificultad === null) {
            alert(`Fin del juego. Puntos totales: ${puntuacionAcumulada}`);
            break;
        }

        if (menuDificultad === "1" || menuDificultad === "2" || menuDificultad === "3") {
            dificultad = menuDificultad;
            alert("Dificultad cambiada.");
            continue;
        }

        if (menuDificultad !== "4") {
            alert("Opción no válida.");
            continue;
        }

        jugarRonda(dificultad);
  }
}

jugarPartida();
