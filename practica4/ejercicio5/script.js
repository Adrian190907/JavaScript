function comprobarNota(nota) {
    if (isNaN(nota)) {

        alert("Introduce un número")
        return false

    } else if (nota < 0 || nota > 10) {

        alert("Introduce una nota valida")
        return false
    }

    return true
}

function clasificarNota(nota) {
    if (nota < 5) 
        return "Suspenso"
    else if (nota < 7) 
        return "Aprobado"
    else if (nota < 9) 
        return "Notable"
    else 
        return "Sobresaliente"
}

function introducirNotas() {
    const arrayNotas = []
    let negativo = false

    for (let i = 0; !negativo; i++) {
        let nota = Number(prompt("Introduce una nota entre 0 y 10 (o -1 para terminar):"))

        while (nota !== -1 && !comprobarNota(nota)) {
            nota = Number(prompt("Introduce una nota entre 0 y 10 (o -1 para terminar):"))
        }

        if (nota === -1) 
            negativo = true
        else {
            arrayNotas[i] = nota
            alert("Nota " + nota + ": " + clasificarNota(nota))
        }
    }

    return arrayNotas
}

function calcularMedia(arrayNotas) {
    if (arrayNotas.length === 0) return null

    let suma = 0
    for (const nota of arrayNotas) {
        suma += nota
    }

    return suma / arrayNotas.length
}

function notaMaxima(notas) {
    let maxima = notas[0]
 
    for (let i = 1; i < notas.length; i++) {
        maxima = Math.max(maxima, notas[i])
    }
 
    return maxima
}

function notaMinima(notas) {
    let minima = notas[0]
 
    for (let i = 1; i < notas.length; i++) {
        minima = Math.min(minima, notas[i])
    }
 
    return minima
}


function mostrarResultados(arrayNotas) {
    if (arrayNotas.length === 0) {
        alert("Introduzca al menos una nota")
        return
    }

    let mediaNotas = calcularMedia(arrayNotas)

    console.log("Todas las notas válidas: " + arrayNotas)
    console.log("Media: " + mediaNotas.toFixed(2))
    console.log("Nota máxima: " + notaMaxima(arrayNotas))
    console.log("Nota mínima: " + notaMinima(arrayNotas))
}
mostrarResultados(introducirNotas())