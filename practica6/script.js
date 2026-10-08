class Libro {
    constructor(titulo, autor, numPag) {
        if (titulo.trim() === "" || titulo === null || titulo === undefined) {
            throw new Error("El titulo y el autor no pueden estar vacios");
        }

        if (autor.trim() === "" || autor === null || autor === undefined) {
            throw new Error("El titulo y el autor no pueden estar vacios");
        }

        if (isNaN(numPag) || numPag <= 0) {
            throw new Error("El numero de paginas tiene q ser mayor que 0 y un entero");
        }

        this.titulo = titulo;
        this.autor = autor;
        this.numPag = numPag;
    }

    describir() {
        document.body.innerHTML = ("<h1>" + this.titulo + "</h1>");
        document.body.innerHTML += ("<p>" + this.autor + "</p>");
        document.body.innerHTML += ("<p>" + this.numPag + "</p>");
    }

    esExtenso() {
        if (this.numPag >= 300) {
            return true;
        } else {
            return false;
        }
    }
}

let libro = new Libro("Titulo","Autor",30);
libro.describir();
console.log(libro);

class Catalogo {
    constructor(...libros) {
        this.libros = libros;
    }

    añadirLibro(libro) {
        this.libros.push(libro);
    }

    eliminarLibroPorTitulo(titulo) {
        this.libros = this.libros.filter(libro => libro.titulo !== titulo);
    }
}

let libros = [];
let catalogo = new Catalogo(libros);
catalogo.añadirLibro(libro)
console.log(catalogo.libros);