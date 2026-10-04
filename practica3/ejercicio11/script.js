let opcion = "";

while (opcion !== "4") {
    opcion = prompt("Introduce una opción:\n1. Principiante\n2. Intermedio\n3. Avanzado\n4. Salir");

    switch(opcion){
        case "1":
            console.log("Usuario principiante");
        break;
        case "2":
            console.log("Usuario intermedio");
        break;
        case "3":
            console.log("Usuario avanzado");
        break;
        case "4":
            console.log("Adios");
        break;
        default:
            console.log("Opción no válida");
        break;
    }
}
