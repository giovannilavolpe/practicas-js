// PARTE A

const nombre = "Giovanni"
const edad = 18
const nCamiseta = 10
const capitan = false
let goles = 4
let lesionado = false
let contratoVigente = true


// PARTE B

console.log(`${nombre} , ${edad} años - Numero de camiseta #${nCamiseta}` );

console.log(`${nombre} , ${edad} años.
Numero de camiseta #${nCamiseta}` );

console.log(`${capitan ? "Sí" : "No"}`)


// PARTE C

let golesParaGoleador = 5
const faltanteParaGoleador = golesParaGoleador - goles

if (goles < 5) {
 console.log("Al jugador le faltan " + faltanteParaGoleador + " goles para alcanzar al goleador")
}
else if (goles === 5) {
 console.log("El jugador tiene la misma cantidad de goles que el goleador.")
}
else {
    console.log("Ya es goleador del torneo con " + goles + " goles")
}