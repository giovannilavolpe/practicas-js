// PARTE A

// const edades = [9, 15, 11, 8, 21, 17, 100];
// console.log(edades.sort());

// Antes de correrlo, se que Sort() va a ordenar los numeros pero converidos en strings, entonces va a comparar sus letras.

// asi fue.

// El resultado esta mal porque ordenar las los numeros por sus letras es una pala practica o no es nuestro objetivo.



// PARTE B

const edades = [9, 15, 11, 8, 21, 17, 100];
console.log(edades.sort((a, b) => a - b));

// Ahora estan orden numerico, de menor a mayor. Esto es gracias a la function arrow.


// PARTE C

const edades = [9, 15, 11, 8, 21, 17, 100];
console.log(edades.sort((a, b) => b - a));

// Ahora estan en orden numerico, pero de mayor a menor.