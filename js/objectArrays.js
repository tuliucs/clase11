// Arreglos de Objetos
// Es común combinar arreglos y objetos, creando listas de objetos.


let listaDePersonas = [
    { nombre: "Carlos", edad: 30 },
    { nombre: "Ana", edad: 25 },
    { nombre: "Pedro", edad: 35 }
];

// Acceder al primer objeto
console.log(listaDePersonas[0].nombre);  // Resultado: "Carlos"

// Recorrer el arreglo de objetos
listaDePersonas.forEach(persona => {
    console.log(persona.nombre + " tiene " + persona.edad + " años.");
});
// Resultado:
// Carlos tiene 30 años.
// Ana tiene 25 años.
// Pedro tiene 35 años.