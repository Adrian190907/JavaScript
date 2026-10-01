const ahora = new Date();
console.log(ahora.getMonth() + 1);
console.log(ahora.getFullYear());
console.log(new Intl.DateTimeFormat("es-ES", { dateStyle: "long" }).format(ahora));