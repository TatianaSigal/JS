let nombre = prompt("escribe tu nombre")
let apellido = prompt("ingresa tu apellido");
let promedio = parseInt(prompt("ingresa tu promedio"));

let salida ="Bienvenido"+" "+ nombre +" "+ apellido;
alert (salida);

let i = promedio
if ( i<=4){
   console.log ("EN PROCESO")
}
else if (i <7){
   console.log ("SUFICIENTE")
}
 else if ( i >= 7){
  console.log ("AVANZADO")
 }




// Promedios
//  function calcularPromedio(prome){
//     let v1 = document.getElementById("n1").value;
//     let v2 = document.getElementById("n2").value;
//     let v3 = document.getElementById("n3").value;
//     let prome = (parseFloat(v1)+parseFloat(v2)+parseFloat(v3))/3;
//     document.getElementById("promedio").innerHTML = prome;
//  }
   
// LAS TABLAS 

let ingresaNumero = parseInt (prompt("Ingresa un Numero del 1 al 10"))

for(let i = 0 ; i <= 10 ; i++){
    let resultado = ingresaNumero * i;
    console.log( ingresaNumero + "x"+ i +" "+ "=" +" "+ resultado);

}

// TURNOS
// for(let i = 1 ; i <= 20 ; i++){
// let ingresaNombre = prompt ("Ingresar Nombre");
// console.log( "Turno N°"+ i + " " + "Nombre:"+ ingresaNombre);
//     if(i==19){
//         break;

// }
// }

