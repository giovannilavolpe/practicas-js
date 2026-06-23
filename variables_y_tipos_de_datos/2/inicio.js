
    // PARTE A
for (var i = 0; i < 3; i++) {
  console.log("Botón " + i + " creado");
}
console.log("i después del bucle:", i);
// 1. i tiene un valor de 3 al terminar el bucle.
// 2. cuando se crea el boton 2, la condicion de (3 > 3) se rompe y no puede seguir.




    // PARTE B
for (let i = 0; i < 3; i++) {
  console.log("Botón " + i + " creado");
}
console.log("i después del bucle:", i);

// Ejecutados continuamente, no se ve ningun error. Al ejecutarlos por separados nos podemos dar cuenta que la devolucion es un error.
// Let es utilizado para una variable temporal, que se mantiene dentro del bloque. 'var' mantiene esa variable por fuera del bloque y ensucia el resto de 'i' que hayan en el programa.


    // PARTE C
const saludo = "Hola";
const nombre = "Valentina";
let intentos = 0;

intentos = intentos + 1;
intentos = intentos + 1;

console.log(saludo + ", " + nombre + ". Intentos: " + intentos);

// const para el saludo y el nombre, ya que estos no cambiaran en el programa.
// let para los intentos, ya que esta variable se va a modificar dependiendo de la cantidad de intentos que haga la persona.
