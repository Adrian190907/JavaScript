let edadInput = prompt("Introduce tu edad:");
let notaInput = prompt("Introduce la nota media de tu expediente con tres decimales:");

let edad = parseFloat(edadInput);
let nota = parseFloat(notaInput);

if (edad < 18 && nota < 0 || nota > 10){

    console.log("Nota con dos decimales: " + parseFloat(notaInput).toFixed(2));

    

    let suma = edad + nota;
    let resta = edad - nota;
    let multiplicacion = edad * nota;
    let division = edad / nota;

    console.log("Suma: " + suma);
    console.log("Resta: " + resta);
    console.log("Multiplicación: " + multiplicacion);
    console.log("División: " + division);

    let boo = true;

    console.log(typeof edadInput + " " + typeof notaInput + " " + typeof edad + " " + typeof nota + " " + typeof suma + " " + typeof resta + " " + typeof multiplicacion + " " + typeof division + " " + typeof boo);
} else {
    console.log("Edad o Nota no valida")
}
