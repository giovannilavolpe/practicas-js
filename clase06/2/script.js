const jugadores = [
  { nombre: "Messi",    goles: 8,  pais: "Argentina" },
  { nombre: "Mbappé",   goles: 5,  pais: "Francia"   },
  { nombre: "Haaland",  goles: 12, pais: "Noruega"   },
  { nombre: "Benzema",  goles: 0,  pais: "Francia"   },
  { nombre: "Lewandowski", goles: 3, pais: "Polonia" },
  { nombre: "Kane",     goles: 2,  pais: "Inglaterra"},
  { nombre: "Neymar",   goles: 1,  pais: "Brasil"    },
  { nombre: "Müller",   goles: 0,  pais: "Alemania"  },
];

// PARTE A 

// const masgoles = jugadores.filter(j => j.goles > 2);
// console.log(masgoles);


// PARTE B

// const nombres = jugadores.map(jugador =>jugador.nombre)
// console.log(nombres)


// PARTE C

// const masgoles = jugadores.filter(j => j.goles > 2).map(j => j.nombre);
// console.log(masgoles)


// PARTE D

const primerfrancia = jugadores.find(j => j.pais === 'Francia')
console.log(primerfrancia)
