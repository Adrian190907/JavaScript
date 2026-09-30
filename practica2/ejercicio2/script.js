let radio = 3.5;
const pi = 3.14159;

let radioEsFinito = Number.isFinite(radio);
console.log("El radio es finito: " + radioEsFinito);

let area = pi * Math.pow(radio, 2);
console.log("El área del círculo es: " + area);

let areaStr = area.toString().slice(0,6);
console.log("El área del círculo es: " + areaStr);

let areaInt = parseInt(area);
console.log("El área del círculo como entero es: " + areaInt);

let areaRound = Math.floor(area);
console.log("El área del círculo redondeada es: " + areaRound);

let numeroAleatorio = Math.random() * 20;
let areaPorNumeroAleatorio = area * numeroAleatorio;
console.log("El área del círculo multiplicada por el número aleatorio " + numeroAleatorio + " es: " + areaPorNumeroAleatorio);

