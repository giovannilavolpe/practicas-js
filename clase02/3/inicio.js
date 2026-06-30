const nombre = "Lautaro";
const edad   = 17;
const ciudad = "Rosario";
const equipo = "Newells";

// 1. Presentación
"Hola, me llamo " + nombre + " y tengo " + edad + " años."
// RESPUESTA `Hola, me llamo ${nombre} y tengo ${edad} anos.`


// 2. Ciudad
"Soy de " + ciudad + "."
// RESPUESTA `Soy de ${ciudad}.`


// 3. Expresión dentro del string
"El doble de mi edad es " + (edad * 2) + "."
// RESPUESTA `El doble de mi edad es ${edad * 2}.`


// 4. Múltiples variables en una oración
"Soy " + nombre + " de " + ciudad + " y sigo a " + equipo + "."
// RESPUESTA `Soy ${nombre} de ${ciudad} y sigo a ${equipo}.`


// 5. String de varias líneas
"Nombre: " + nombre + "\n" + "Edad: " + edad + "\n" + "Ciudad: " + ciudad
// RESPUESTA `Nombre: ${nombre} Edad: ${edad} Ciudad: %{ciudad}`
