let nombre = prompt("escribe tu nombre")
let apellido = prompt("ingresa tu apellido");
let edad = parseInt(prompt("ingresa tu edad"));

let salida ="Bienvenido"+" "+ nombre +" "+ apellido +" "+ edad;
alert (salida);

// LAS TABLAS 

let ingresaNumero = parseInt (prompt("Ingresa un Numero del 1 al 10"))
for(let i = 0 ; i <= 10 ; i++){
    let resultado = ingresaNumero * i;
    console.log( ingresaNumero + "x"+ i +" "+ "=" +" "+ resultado);

}

