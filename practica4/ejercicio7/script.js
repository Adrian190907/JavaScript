function celsiusAFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function kilometrosAMillas(km) {
    return km * 0.621371;
}

function eurosADolares(euros, tasaCambio = 1.08) {
    return euros * tasaCambio;
}

function pedirNumeroValido(mensajePrompt) {
    let valor = parseFloat(prompt(mensajePrompt));

    while (Number.isNaN(valor)) {
        alert("Error: El valor introducido debe ser numérico.");
        valor = parseFloat(prompt(mensajePrompt));
    }

  return valor;
}

function pedirTasaCambioOpcional() {
    const entradaTasa = prompt("Introduce tasa de cambio (deja vacío para usar 1.08):");

    if (entradaTasa === "" || entradaTasa === null) {
        return undefined;
    }

    let tasa = parseFloat(entradaTasa);

    while (Number.isNaN(tasa) || tasa <= 0) {
        alert("La tasa tiene q ser mayor a 0.");
        tasa = parseFloat(prompt("Introduce una tasa de cambio válida (deja vacío para usar 1.08):"));
    }

  return tasa;
}

let opcion;

do {
    opcion = prompt(
        "--- MENÚ ---\n" +
        "1. Celsius a Fahrenheit\n" +
        "2. Kilómetros a Millas\n" +
        "3. Euros a Dólares\n" +
        "4. Salir\n" +
        "Elija una opción:"
    );

    if (opcion === null || opcion === "4") {
        alert("Adios");
        break;
    }

    switch (opcion) {
        case "1": {

            const valor = pedirNumeroValido("Introduce los grados Celsius:");
            const res = celsiusAFahrenheit(valor);
            alert(`${valor} ºC equivalen a ${res.toFixed(2)} ºF`);

        break;
        }

        case "2": {

            const valor = pedirNumeroValido("Introduce los kilómetros:");
            const res = kilometrosAMillas(valor);
            alert(`${valor} km equivalen a ${res.toFixed(2)} millas`);

        break;
        }

        case "3": {

            const valor = pedirNumeroValido("Introduce los euros:");
            const tasa = pedirTasaCambioOpcional();
            const res = eurosADolares(valor, tasa);
            alert(`${valor} € equivalen a ${res.toFixed(2)} \$`);
        break;
        }

        default:
            alert("Seleccione una opción válida (1-4).");
  }
  
} while (opcion !== "4");


