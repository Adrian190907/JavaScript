let palabra = prompt("Introduce una palabra:").toLowerCase();
let vocales = 0;

for (let i = 0; i < palabra.length; i++) {
    let letra = palabra[i];
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        vocales = vocales + 1;
    }
}

console.log("La palabra tiene " + vocales + " vocales.");
