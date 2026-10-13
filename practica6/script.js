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

    consultarLibroPorTitulo(titulo) {
        return this.libros.find(libro => libro.titulo === titulo);
    }

    listarLibros() {
        if (this.libros.length === 0) {
            document.body.innerHTML += "<p>No hay nada en el catalogo</p>";
        } else {
            this.libros.forEach(libro => {
                libro.describir();
            });
        }
    }
}

let libro1 = new Libro ("Harry Potter", "J.K. Rowling", 299);
let libro2 = new Libro ("Jeronimo Stilton", "Neron Vale", 300);
let libro3 = new Libro("La Ciudad de las Almas Huecas", "Sabela Miro", 300);

libro1.describir();
console.log("¿libro1 es extenso?:", libro1.esExtenso());
console.log("¿libro2 es extenso?:", libro2.esExtenso());

let catalogo = new Catalogo();

catalogo.añadirLibro(libro1);
catalogo.añadirLibro(libro2);
catalogo.añadirLibro(libro3);
catalogo.añadirLibro(libro1); 

console.log("Buscar Harry Potter:", catalogo.consultarLibroPorTitulo("Harry Potter"));
catalogo.eliminarLibroPorTitulo("Harry Potter");
console.log("Buscar Harry Potter despues de eliminarlo:", catalogo.consultarLibroPorTitulo("Harry Potter"));

console.log("Buscar Jeronimo Stilton:", catalogo.consultarLibroPorTitulo("Jeronimo Stilton"));ç

catalogo.listarLibros();
