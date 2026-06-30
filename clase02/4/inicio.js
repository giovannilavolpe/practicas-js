
// PARTE A

console.log(0 == false)
console.log(0 === false)
console.log("" == false)
console.log(null == undefined)
console.log(null === undefined)
console.log("5" == 5)
console.log("5" === 5)

// para mi:
// true
// false
// true
// la verdad, no se. (despues de ver, devuelve true)
// la verdad, no se. (despues de ver, devuelve false)
// true porque convierte y son lo mismo.
// false porque uno es string y el otro es number


// PARTE B

// El == lo utilizamos para convertir el tipo y comparar. Tengo entendido que utilizarlo es una mala practica. Si usamos === sabemos bien que es lo que comparamos.



// PARTE C

// El usuario escribe su nombre en un formulario
const nombreUsuario = "  "; // espacios en blanco
if (nombreUsuario == "") {
  console.log("El nombre no puede estar vacío");
} else {
  console.log("Bienvenido, " + nombreUsuario);
}

// El problema de este codigo es que esta transformando y comparando un espacio en blanco con un espacio vacio. (Un "" con un "   ") 