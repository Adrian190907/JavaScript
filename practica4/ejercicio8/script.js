function analizar(...numeros) {
  if (numeros.length === 0) {
    return "No hay datos";
  }

  for (let i = 0; i < numeros.length; i++) {
    if (!Number.isFinite(numeros[i])) {
      return null; 
    }
  }

  let suma = 0;
  let minimo = numeros[0];
  let maximo = numeros[0];

  for (let i = 0; i < numeros.length; i++) {
    const num = numeros[i];
    suma += num;
    if (num < minimo) minimo = num;
    if (num > maximo) maximo = num;
  }

  const media = suma / numeros.length;

  return { suma, media, minimo, maximo };
}

function presentarInforme(resultado) {
  if (resultado === "No hay datos") {
    console.log("No hay datos para analizar");
    return;
  }
  if (resultado === null) {
    console.log("No es un numero valido");
    return;
  }

  console.log(
    `Suma total: ${resultado.suma}\n` +
    `Promedio: ${resultado.media.toFixed(2)}\n` +
    `Menor: ${resultado.minimo}\n` +
    `Mayor: ${resultado.maximo}`
  );
}

console.log("Numeros directos):");
presentarInforme(analizar(5, 10, -3, 10, 2));

console.log("\n spread array:");
const arrayDatos = [4, 8, 15, -2, 4];
presentarInforme(analizar(...arrayDatos));

console.log("\n Sin datos:");
presentarInforme(analizar());

console.log("\n Solo un número:");
presentarInforme(analizar(42));

console.log("\n Numeros repetidos y negativos:");
presentarInforme(analizar(-5, -5, 0, 10, 10));
