const original = {
    nombre: "Mbappe", goles: "5"
};

const copia = {...original}; // PARTE C --> agregue SPREAD. esto hace que la copia sea realmente una copia y tenga valor distinto con el original.

copia.goles = 99;

console.log(original.goles, 'goles de mbappe original');
console.log(copia.goles, 'goles de mbappe copia');

// Modifique los goles de la copia, y aun asi se modificaron los goles de original tambien.

console.log(original === copia);
// da True, porque todavia no son cajas distintas. Para ello, debo utilizar spread.
// Despues del SPREAD, ahora da false.

