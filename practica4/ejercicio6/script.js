function calcularLitros(distancia, consumo) {
    return (distancia * consumo) / 100;
}

function calcularCosteTotal(litros, precioCombustible = 1.50) {
    return litros * precioCombustible;
}

function calcularCostePorViajero(costeTotal, viajeros) {

    if (viajeros === 0) {
      return 0;
    }
    return costeTotal / viajeros;
}

function mostrarInforme(funcionCalculo, arg1, arg2) {

    const resultado = funcionCalculo(arg1, arg2);
    return resultado.toFixed(2);
}

function validarValores(distancia, consumo, precio_combustible, num_viajeros) {

    if (Number.isNaN(distancia) || distancia <= 0) {
      alert("Error: La distancia debe ser un número mayor que cero.");
      return false;
    }

    if (Number.isNaN(consumo) || consumo <= 0) {
      alert("Error: El consumo debe ser un número mayor que cero.");
      return false;
    }

    if (Number.isNaN(precio_combustible) || precio_combustible < 0) {
      alert("Error: El precio del combustible debe ser un número válido.");
      return false;
    }

    if (Number.isNaN(num_viajeros) || num_viajeros < 0) {
      alert("Error: El número de viajeros debe ser un número válido.");
      return false;
    }

  return true;
}

let distancia, consumo, precio_combustible, num_viajeros;

do {
    distancia = Number(prompt("Distancia del viaje:"));
    consumo = Number(prompt("Consumo del vehículo:"));
  
    const entradaPrecio = prompt("Precio del combustible:");
    if (entradaPrecio === "" || entradaPrecio === null) {
      precio_combustible = undefined;
    } else {
      precio_combustible = Number(entradaPrecio);
    }
  
    num_viajeros = Number(prompt("Número de viajeros:"));
  
} while (!validarValores(distancia, consumo, precio_combustible ?? 1.50, num_viajeros));

const litrosEstimados = calcularLitros(distancia, consumo);
const totalCoste = calcularCosteTotal(litrosEstimados, precio_combustible);

alert(
    `Combustible estimado: ${litrosEstimados.toFixed(2)} litros\n` +
    `Coste total: ${mostrarInforme(calcularCosteTotal, litrosEstimados, precio_combustible)} €\n` +
    `Coste por viajero: ${mostrarInforme(calcularCostePorViajero, totalCoste, num_viajeros)} €`
);
