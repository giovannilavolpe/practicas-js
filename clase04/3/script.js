let i = 1

while (i <= 30) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('GOLAZO')
        i++
    }
    else if (i % 3 === 0) {
        console.log('GOL')
        i++
    }
    else if (i % 5 === 0) {
        console.log('PENAL')
        i++
    }
    else {
        console.log(i)
        i++
    }
}

// Este ejercicio me costo pensarlo. Defini i = 1 y luego utilice un while para que cuando sea menor a 30, entrar en distintas condiciones. Para cada if/else utilice i++ ya que termina de printear y suma un numero mas a i.