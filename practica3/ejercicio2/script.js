let num1 = parseFloat(prompt("Introduce un número"))
let num2 = parseFloat(prompt("Introduce otro número"))

if (Number.isFinite(num1) &&  Number.isFinite(num2) && num1 !== 0 && num2 !== 0){
    if (num1 === num2)
        alert(num1 + " y " + num2 + " son iguales.")
    else if (num1 > num2)
        alert(num1 + " es mayor que " + num2)
    else 
        alert(num2 + " es mayor que " + num1)
}else
    alert("Introduce un número válido")
