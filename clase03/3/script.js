// 1 == "1" transforma y compara, pienso que devuelve true
// 1 === "1" pienso que devuelve false porque son distinto tipo

// true == 1 transforma y compara, pienso que devuelve true
// true === 1 pienso que devuelve false porque son distinto tipo

// null == undefined transforma y compara, no estoy seguro pero me la juego por un "true". --> asi es
// null === undefined pienso que devuelve false porque son distinto tipo

// "" == 0 transforma y compara, pienso que devuelve false. --> devuelve true.
// "" === 0 pienso que devuelve false porque son distinto tipo. 

// " " == 0 transforma y compara, pienso que devuelve true.


console.log(1 == "1",
1 === "1",

true == 1,
true === 1,

null == undefined,
null === undefined,

"" == 0,
"" === 0,

" " == 0);


// parte b

// dos casos:


// true == 1 devuelve true porque convierte al 1 en truthy.
// true === 1 devuelve false porque true es booleano y '1' es un numero, son distinto tipo.


// 1 == "1" devuelve true porque transforma y son el mismo digito
// 1 === "1" devuelve 


// parte c

const ingresado = 100; // aqui estaba el problema. 100 estaba con "", lo que lo convertia en string, y al comparar, un string con un numero, daba false.

if (ingresado === 100) { // tambien podemos modificar esta linea de este modo: ingresado == 100. De esta forma transforma y compara. El ejercicio dara true.
  console.log("Correcto");
} else {
  console.log("Incorrecto");
}