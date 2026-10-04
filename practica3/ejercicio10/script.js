let num = Math.floor(Math.random() * 10) + 1;
let intento = 0;

while (intento !== num) {
    intento = Number(prompt("Adivina el número del 1 al 10:"));
    
    if (intento < num) {
        alert("El número secreto es mayor");
    } else if (intento > num) {
        alert("El número secreto es menor");
    }
}

console.log("Acertase")
