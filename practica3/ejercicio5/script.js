let suma = 0;
let contador = 0;
let numero = 0;

while (numero >= 0) {
    numero = Number(prompt("Introduce un número:"));
    
    if (numero >= 0) {
        suma = suma + numero;
        contador = contador + 1;
    }
}

let media = suma / contador;
alert("Suma total: " + suma + "\nMedia: " + media);
