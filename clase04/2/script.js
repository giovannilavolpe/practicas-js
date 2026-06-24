// PARTE A

// const equipos = ["Argentina", "Francia", "Brasil", "Alemania", "España"];

// for (let i = 0; i < equipos.length; i++) {

//     console.log(`${i + 1}, ${equipos[i]}`);
// }
// utilice i+1 para que empiece a contar desde 1 y no en 0.


// PARTE B

  let i = 1;
  const equipos = ["Argentina", "Francia", "Brasil", "Alemania", "España"];

  for (const equipo of equipos) {
      console.log(`${i}`, `${equipo}`);
      i++
}


// PARTE C
// for of lo utilizamos para iterar sobre items como por ejemplo arrays (lo que vimos en este caso). 
// for lo utilizamos cuando necesitemos tener el control total.
