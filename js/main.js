
// //EJERCICIOS JS VANILLA -


// //1
// let numero1 = 100;

// let numero2 = 200;

// if(numero1 > numero2){
//     console.log("Numero 1 es mayor");
// } else if (numero1 == numero2){
//     console.log("Los numeros son iguales");
// }else {
//     console.log("Numero 2 mayor que número uno");
// };

// //2 3
// let nombre = prompt("Introduce tu nombre");

// if(nombre == "Paula"){
//     console.log("Bienvenida Paula");
// }else{
//     console.log("No eres Paula, no te saludo");
// };

// //4

// let radiusCircle = parseFloat(prompt("Dime el radio del circulo"));

// let circleArea = Math.PI * (radiusCircle**2);

// console.log(circleArea);

// //5

// let numeroPar = parseInt(prompt("Dame un numero"));

// if((numeroPar % 2) == 0){
//     console.log("Es divisible entre 2 (par)");
// }else{
//     console.log("No lo es")
// }

// //6

// let numeroBase = parseFloat(prompt("Dime un número por teclado"));

// let resultadoIva = (numeroBase * 21) / 100;

// console.log(resultadoIva);

//7

// let i = 1;

// while(i <= 100){
//     console.log(i);

//     i++;
// };

//8 9

// for(let i = 1; i <= 100; i++){

//     console.log(i);

// };

// let i = 1;

// while(i < 100){
//     if(((i % 2) == 0) && ((i % 3) == 0)){
//         console.log(i);
//     };

//     i++;
// };

//10

// let numeroVentas = parseInt(prompt("Dime cuantas cosas has vendido"));

// let ventasTotal = 0;

// for(let i = 1; i <= numeroVentas; i++){

//     ventasTotal += parseInt(prompt("Dime que vale el articulo"));

//     console.log("Hemos añadido ", i ,"ventas, y ahora el total de ventas es... ", ventasTotal);
// }

//11

// let diaSemana = prompt("Dime el día de la semana").toLowerCase();

// switch(diaSemana){
//     case "lunes":
//     case "martes":
//     case "miercoles":
//     case "jueves":
//     case "viernes":
//         console.log("Es laborable...a sufrir a Urbalab");
//     break;

//     case "sabado":
//     case "domingo":
//         console.log("A programar en casa");
//     break;

//     default:
//         console.log("Te has equivocado");
//     break;
// };

//12

// let password = "meme";
// let respuesta = "";

// for(let i = 3; i >=1; i--){
//     respuesta = prompt(`Dime el password, tienes ${i} intentos`);

//     if(respuesta == password){
//         console.log("Felicidades & Enhorabuena ...has acertado");
//         break;
//     };

// };

//13

let primerNumero = parseInt(prompt("Soy el primer número"));

let segundoNumero = parseInt(prompt("Soy el segundo número"));

let operando = prompt("Dime la operación a realizar").toLowerCase();

switch (operando) {
    case "+":
    case "sumar":
        console.log(primerNumero + segundoNumero);
        break;

    case "-":
    case "restar":
        console.log(primerNumero - segundoNumero);

        break;

    case "*":
    case "multiplicar":
        console.log(primerNumero * segundoNumero);

        break;

    case "/":
    case "dividir":
        console.log(primerNumero / segundoNumero);

        break;

    case "%":
    case "modulo":
    case "resto":
        console.log(primerNumero % segundoNumero);

        break;

    case "**":
    case "elevar":
        console.log(primerNumero ** segundoNumero);

        break;

    default:
        console.log("Que demonios dices???");
        break;
}

