// PARTE A

function areaRectangulo(base, altura) { // Definis la funcion
    let resultado = base * altura;
    return resultado; // declaras 'resultado' como el resultado de multiplicar base por altura
}

console.log(areaRectangulo(9, 9)); //remplazas los valores de base por altura por numeros. En este caso 9 x 9 es 81.


// PARTE B

function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return true
    }
    else {
        return false
    }
}

// esMayorDeEdad(18) devuelve true
// esMayorDeEdad(17) devuelve false


// PARTE C


function nombreCompleto(nombre, apellido) {
    return `Nombre completo: ${nombre} ${apellido}`
}
console.log(nombreCompleto("Giovanni", "La Volpe")); // devuelve lo que esta en el return, definimos strings para nombre y para apellido y se muestran en pantalla con el template literal.