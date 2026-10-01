let nombre = "Adrián";
let apellidos = "Moya Vilchez";
let nombreCompleto = nombre.concat(" ", apellidos);

console.log("Nombre completo: " + nombreCompleto);
console.log("Longitud del nombre completo: " + nombreCompleto.length);
console.log("Caracteres de las posiones 7 a 10: " + nombreCompleto.slice(7, 11));
console.log("Nombre con el segundo apellido cambiado: " + nombreCompleto.replace("Vilchez", "Vazquez"));
console.log("Nombre en mayúsculas: " + nombreCompleto.toUpperCase());
console.log("Último caracter del nombre completo: " + nombreCompleto.charAt(nombreCompleto.length - 1));

let nombreArray = nombreCompleto.split(" ");
console.log("String a array: " + nombreArray);
console.log("El primer apellido comienza en la posición: " + nombreCompleto.indexOf("Moya"));
console.log(`Bienvenido/a ${nombreCompleto}`)

let primeraLetra = nombreArray[0][0].toUpperCase(); 
let segundaLetra = nombreArray[1][0].toUpperCase(); 
let terceraLetra = nombreArray[2][0].toUpperCase(); 

let iniciales = primeraLetra + segundaLetra + terceraLetra;

console.log("Iniciales en mayúsculas: " + iniciales);





