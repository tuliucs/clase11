// Objetos (Objects)
// Un objeto es una colección de pares clave-valor. Las claves son cadenas (o símbolos) y los valores pueden ser cualquier tipo de dato.

// Declaración de Objetos

// Objeto vacío
let objetoVacio = {};

// Objeto con propiedades
let persona = {
    nombre: "Carlos",
    edad: 30,
    ciudad: "Bogotá"
};
// Acceso a Propiedades
// Puedes acceder a las propiedades de un objeto mediante la notación de punto (.) o de corchetes ([]).


// Notación de punto
console.log(persona.nombre);  // Resultado: "Carlos"

// Notación de corchetes
console.log(persona["edad"]);  // Resultado: 30
// Modificar Propiedades

// Modificar una propiedad existente
persona.edad = 31;

// Añadir una nueva propiedad
persona.profesion = "Ingeniero";

// Eliminar una propiedad
delete persona.ciudad;

console.log(persona);
// Resultado: { nombre: 'Carlos', edad: 31, profesion: 'Ingeniero' }
// Métodos en Objetos
// Los objetos también pueden tener métodos, que son funciones asociadas a una propiedad del objeto.


let personaConMetodo = {
    nombre: "Ana",
    edad: 25,
    saludar: function() {
        console.log("Hola, me llamo " + this.nombre);
    }
};

personaConMetodo.saludar();  // Resultado: "Hola, me llamo Ana"
// Recorrer un Objeto (for...in)
// El bucle for...in te permite recorrer todas las claves de un objeto.

for (let clave in persona) {
    console.log(clave + ": " + persona[clave]);
}
// Resultado:
// nombre: Carlos
// edad: 31
// profesion: Ingeniero