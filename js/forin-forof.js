// for...in
const persona = { nombre: "Ana", edad: 30 };
for (let propiedad in persona) {
    console.log(propiedad + ": " + persona[propiedad]);
}

// for...of
const numeros = [10, 20, 30];
for (let numero of numeros) {
    console.log(numero);
}
