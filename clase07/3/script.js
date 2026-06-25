const jugador = {
  nombre: "Haaland",
  pais: "Noruega",
  goles: 12,
};

const podio = ["Argentina", "Francia", "Croacia"];


//  PARTE A

// const { nombre, goles } = jugador;

// console.log(nombre, goles);
// Saque nombre y goles del objeto 'jugador', y luego los muestro en pantalla.


// PARTE B

// const { nombre: nombreJugador } = jugador;
// console.log(nombreJugador);
// cambiamos nombre por nombreJugador


// PARTE C

// const { camiseta = 9 } = jugador;
// console.log(camiseta);
// ahora jugador tiene la camiseta 9 por defecto.


// PARTE D

const [oro, plata, bronce] = podio;
console.log(oro);
console.log(plata);
console.log(bronce);
// Estoy mostrando las 3 medallas utilizando Array por posicion


