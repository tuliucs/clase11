// En JavaScript, los arreglos y objetos son dos estructuras clave para almacenar datos. Aquí te explico la sintaxis básica y algunos métodos importantes para trabajar con ellos.

// 1. Arreglos (Arrays)
// Un arreglo es una colección ordenada de elementos. Pueden almacenar cualquier tipo de dato (números, cadenas, objetos, funciones, etc.).

// Declaración de Arreglos
// Arreglo vacío
let arregloVacio = [];

// Arreglo con elementos
let numeros = [1, 2, 3, 4, 5];
let frutas = ["Manzana", "Banana", "Naranja"];
// Acceso a Elementos
// Los elementos de un arreglo se acceden por su índice, que comienza en 0.

console.log(numeros[0]); // Resultado: 1
console.log(frutas[1]);  // Resultado: "Banana"

// Métodos Comunes de Arreglos
// push(): Añade un elemento al final del arreglo.
// pop(): Elimina el último elemento del arreglo.
// shift(): Elimina el primer elemento del arreglo.
// unshift(): Añade un elemento al principio del arreglo.
// length: Devuelve la longitud del arreglo.
// forEach(): Ejecuta una función para cada elemento del arreglo.
// map(): Crea un nuevo arreglo con el resultado de aplicar una función a cada elemento.


// Añadir elementos
frutas.push("Fresa");  // ["Manzana", "Banana", "Naranja", "Fresa"]
numeros.unshift(0);    // [0, 1, 2, 3, 4, 5]

// Eliminar elementos
frutas.pop();          // ["Manzana", "Banana", "Naranja"]
numeros.shift();       // [1, 2, 3, 4, 5]

// Recorrer el arreglo
numeros.forEach((num) => console.log(num));

// Mapear un arreglo a otro
let dobles = numeros.map((num) => num * 2);  // [2, 4, 6, 8, 10]


// Otros Métodos de Arreglos
// filter(): Filtra elementos según una condición.
// find(): Devuelve el primer elemento que cumple una condición.
// includes(): Verifica si un arreglo contiene un elemento.

// Filtrar elementos mayores que 2
let mayoresQueDos = numeros.filter(num => num > 2);  // [3, 4, 5]

// Encontrar el primer número mayor que 2
let primerMayorQueDos = numeros.find(num => num > 2);  // 3

// Verificar si el arreglo incluye un número
let incluyeCuatro = numeros.includes(4);  // true
