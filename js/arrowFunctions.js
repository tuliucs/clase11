// Función sin parámetros
const saludarFlecha = () => {
    console.log("Hola Mundo desde una función flecha");
};

// Función con un solo parámetro
const cuadrado = num => num * num; // Retorno implícito si es una sola expresión

// Función con varios parámetros
const multiplicar = (a, b) => a * b;

saludarFlecha();
console.log(cuadrado(4)); // Resultado: 16
console.log(multiplicar(3, 5)); // Resultado: 15