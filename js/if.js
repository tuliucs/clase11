let edad = -1;

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else if (edad > 12) {
    console.log("Eres adolescente");
} else if (edad>0) {
    console.log("Eres un niño");
}
else {
    console.log("EDAD NO VALIDAD");
}

//Ejemplo IF ANIDADO
if (edad>0){
    if (edad >= 18) {
        console.log("Eres mayor de edad");
    } else if (edad > 12) {
        console.log("Eres adolescente");
    } else  {
        console.log("Eres un niño");
    }
}
else {
    console.log("EDAD NO VALIDAD");
}