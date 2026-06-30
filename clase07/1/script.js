const jugador = {
  nombre: "Messi",
  goles: 8,
  pais: "Argentina",
};

console.log(jugador.nombre); // notacion de punto.

console.log(jugador["nombre"]); // notacion de corchetes.

jugador.goles = 9
console.log(jugador) // ahora Messi (jugador) tiene 9 goles.

jugador.club = 'Inter Miami'
console.log(jugador) // ahora tiene una nueva propiedad, club.

