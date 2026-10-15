const textoCafe = `{
    "id": 2,
    "title": "Latte",
    "description": "As the most popular coffee drink out there, the latte is made with a shot of espresso and steamed milk, with just a touch of foam. It can be ordered plain or flavored with everything from vanilla to pumpkin spice.",
    "ingredients": [
        "Espresso",
        "Steamed milk"
    ],
    "image": "https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhdHRlfGVufDB8fDB8fHww"
}`;

const cafe = JSON.parse(textoCafe);
console.log("id: " + cafe.id)
console.log("title: " + cafe.title)
console.log("description: " + cafe.description)
console.log("ingredients: " + cafe.ingredients)
console.log("image: " + cafe.image)

const fichaCafe = {
    "id" : cafe.id,
    "nombre" : cafe.title,
    "description" : cafe.description,
    "ingredients" : cafe.ingredients,
    "image" : cafe.image
};

document.body.innerHTML = "<h1>" + fichaCafe.nombre + "</h1>";
document.body.innerHTML += `<img src="${fichaCafe.image}" style = "height: 300px">`;

const fichaCafe2 = {
    "id" : fichaCafe.id,
    "nombre" : fichaCafe.nombre,
    "ingredientes" : fichaCafe.ingredients
};

const texto = JSON.stringify(fichaCafe2, ["id", "nombre", "ingredientes"], 2)

console.log(texto);
document.body.innerHTML += "<h3> Ficha en formato JSON </h3>"
document.body.innerHTML += "<pre>" + texto + "</pre>"

const nuevoObjeto = JSON.parse(texto);

console.log("Ficha recuperada: ", nuevoObjeto);

console.log("¿Incluye imagen? :", ("image" in nuevoObjeto));







